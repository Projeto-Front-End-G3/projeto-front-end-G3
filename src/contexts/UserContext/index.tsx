import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iUserFormValue } from "../../pages/RegisterPage";
import api from "../../services/api";

type iUserProviderProps = {
  children: React.ReactNode;
};

export interface iLogin {
  email: string;
  password: string;
}

interface iValuesTypes {
  loginUser: (data: iLogin) => void;
  registerUser: (formData: iUserFormValue) => Promise<void>;
  userData: object | null;
  authorized: boolean;
  setAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext({} as iValuesTypes);

const UserProvider = ({ children }: iUserProviderProps) => {
  const [userData, setUserData] = useState(null);
  const [authorized, setAuthorized] = useState(true);
  const navigate = useNavigate();

  const loginUser = async (formData: iLogin) => {
    try {
      const { data } = await api.post("/login", formData);
      const { user, accessToken } = data;

      api.defaults.headers.authorization = `Bearer ${accessToken}`;
      localStorage.setItem("@Disclosure:token", JSON.stringify(accessToken));
      localStorage.setItem("@Disclosure:userId", JSON.stringify(user["id"]));

      setUserData(user);
      setAuthorized(true);

      navigate("/")

      toast.success("Acesso autorizado!");
    } catch (_) {
      toast.error("Usuário não existe!");
    }
  };

  const registerUser = async (formData: iUserFormValue) => {
    try {
      await api.post("/register", formData);

      toast.success("Conta criada com sucesso");

      navigate("/login");
    } catch (_) {
      toast.error("Email já cadastrado");
    }
  };

  const logout = () => {
    localStorage.removeItem("@Disclosure:token");
    localStorage.removeItem("@Disclosure:userId");

    setUserData(null);
    setAuthorized(false);
  }

  useEffect(() => {
    const loadUser = async () => {
      const token: string = JSON.parse(
        localStorage.getItem("@Disclosure:token")!
      );

      const id: string = JSON.parse(
        localStorage.getItem("@Disclosure:userId")!
      );

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get(`/users/${id}`);

          setUserData(data);
          setAuthorized(true);

          // navigate("/dashboard");
        } catch (_) {
          localStorage.removeItem("@Disclosure:token");
          localStorage.removeItem("@Disclosure:userId");
          navigate("/");
        }
      }
    };

    loadUser();
  }, []);

  const value = {
    registerUser,
    loginUser,
    userData,
    authorized,
    setAuthorized,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
