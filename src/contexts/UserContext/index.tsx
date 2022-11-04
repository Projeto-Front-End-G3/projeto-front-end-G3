import { createContext, useState } from "react";

type iUserProviderProps = {
  children: React.ReactNode;
};

export interface iUserContext {
  handleMenu: () => void;
}

export const UserContext = createContext({} as iUserContext);

const UserProvider = ({ children }: iUserProviderProps) => {

  const [menu, setMenu] = useState(false)
  
  const handleMenu = () => {
    setMenu(!menu)
  }
  
  const value = {
    handleMenu
  };

  
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
