import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iUserFormValue } from "../../pages/RegisterPage";

import api from "../../services/api";

type iUserProviderProps = {
  children: React.ReactNode;
};

export interface iUserContext {
  registerUser: (formData: iUserFormValue) => Promise<void>;
}

export const UserContext = createContext({} as iUserContext);

const UserProvider = ({ children }: iUserProviderProps) => {
  const navigate = useNavigate();

  const registerUser = async (formData: iUserFormValue) => {
    try {
      await api.post("/register", formData);

      toast.success("Conta criada com sucesso");

      navigate("/login");
    } catch (_) {
      toast.error("Email já cadastrado");
    }
  };

  const value = { registerUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
