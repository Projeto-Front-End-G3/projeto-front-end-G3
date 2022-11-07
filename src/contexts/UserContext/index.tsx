import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iUserFormValue } from "../../pages/RegisterPage";
import api from "../../services/api";

type iUserProviderProps = {
  children: React.ReactNode;
}

export interface iLogin {
  email: string;
  password: string;
}

export interface iValuesTypes {
  screen: number;
  LoginRequest: (data: iLogin) => void;
  registerUser: (formData: iUserFormValue) => Promise<void>;
}

export const UserContext = createContext({} as iValuesTypes);

const UserProvider = ({ children }: iUserProviderProps) => {

  const navigate = useNavigate();
  const [screen, setScreen] = useState(window.innerWidth)

  useEffect(() => {
    const handleScreen = () => setScreen(window.innerWidth)
    window.addEventListener('resize', handleScreen)

    return () => window.removeEventListener('resize', handleScreen)
  }, [])

  const LoginRequest = (data: iLogin) => {
    try {
      api
        .post("/login", data)
        .then((resp) => {
          window.localStorage.setItem("@TOKEN", resp.data.accessToken);
          navigate("/");
          toast.success("Acesso autorizado!", { autoClose: 2000 });
        })
        .catch((err) =>
          toast.error("Usuário não existe!", { autoClose: 2000 })
        );
    } catch (error) {
      console.log("oi");
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
    LoginRequest;
  };

  const value = { registerUser, LoginRequest, screen };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
