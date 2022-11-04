import { createContext } from "react";
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
  LoginRequest: (data: iLogin) => void;
  registerUser: (formData: iUserFormValue) => Promise<void>;
}

export const UserContext = createContext({} as iValuesTypes);

const UserProvider = ({ children }: iUserProviderProps) => {
  const navigate = useNavigate();

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

  const value = { registerUser, LoginRequest };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
