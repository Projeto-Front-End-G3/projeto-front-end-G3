import { createContext, ReactNode, useState } from 'react';

interface iUserContextNormalProps {
  children: ReactNode;
}

interface iUserContextNormal {
  user: boolean;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContextNormal = createContext({} as iUserContextNormal);

const UserProviderNormal = ({ children }: iUserContextNormalProps) => {
  const [user, setUser] = useState(true);

  return (
    <UserContextNormal.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContextNormal.Provider>
  );
};

export default UserProviderNormal;
