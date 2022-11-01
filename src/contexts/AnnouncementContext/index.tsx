import { createContext } from "react";

type iAnnouncementProviderProps = {
  children: React.ReactNode;
};

export const AnnouncementContext = createContext({});

const AnnouncementProvider = ({ children }: iAnnouncementProviderProps) => {
  const value = {};
  return (
    <AnnouncementContext.Provider value={value}>
      {children}
    </AnnouncementContext.Provider>
  );
};

export default AnnouncementProvider;
