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
export interface iValuesTypes {
  loginUser: (data: iLogin) => void;
  registerUser: (formData: iUserFormValue) => Promise<void>;
}

export const UserContext = createContext({} as iValuesTypes);

const UserProvider = ({ children }: iUserProviderProps) => {
  const [userData, setUserData] = useState();
  const navigate = useNavigate();

  const loginUser = async (formData: iLogin) => {
    try {
      const { data } = await api.post("/login", formData);
      const { user, accessToken } = data;

      api.defaults.headers.authorization = `Bearer ${accessToken}`;
      localStorage.setItem("@Disclosure:token", JSON.stringify(accessToken));
      localStorage.setItem("@Disclosure:userId", JSON.stringify(user["id"]));

      setUserData(user);

      toast.success("Acesso autorizado!", { autoClose: 2000 });
    } catch (_) {
      toast.error("Usuário não existe!", { autoClose: 2000 });
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

          navigate("/dashboard");
        } catch (_) {
          localStorage.removeItem("@Disclosure:token");
          localStorage.removeItem("@Disclosure:userId");
        }
      }
    };

    loadUser();
  }, []);

  const value = { registerUser, loginUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
