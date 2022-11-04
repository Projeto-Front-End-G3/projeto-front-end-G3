import axios from "axios";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type iUserProviderProps = {
  children: React.ReactNode;
};
export interface iLogin{
  email: string
  password: string
}
export interface iValuesTypes{
  LoginRequest: (data: iLogin) => void,
} 

export const UserContext = createContext({} as iValuesTypes);

const UserProvider = ({ children }: iUserProviderProps) => {

  const navigate = useNavigate()

  const LoginRequest = (data: iLogin) =>{
    try {
      axios.post('https://projeto-frontend-api.herokuapp.com/login', data)
      .then(resp => {
        window.localStorage.setItem('@TOKEN', resp.data.accessToken)
        navigate('/')
        toast.success('Acesso autorizado!', {autoClose: 2000})
      }).catch(err => toast.error('Usuário não existe!', {autoClose: 2000}))
    } catch (error){
      console.log('oi')
    }
  }

  const value = {
    LoginRequest
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
