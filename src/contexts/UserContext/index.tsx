import { createContext } from "react";

type iUserProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext({});

const UserProvider = ({ children }: iUserProviderProps) => {
  const value = {
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
