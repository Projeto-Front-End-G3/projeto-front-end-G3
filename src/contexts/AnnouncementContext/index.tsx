import { createContext, useEffect, useState } from "react";
import { FaDoorClosed } from "react-icons/fa";
import api from '../../services/api'

type iAnnouncementProviderProps = {
  children: React.ReactNode;
};

interface iAnnouncementContext {
  announcement: iAnnouncement[];
  globalLoading: boolean;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface iAnnouncement {
  user: iUserDate
  body: string;
}

interface iUserDate {
  name: string;
  img: string;
}

export const AnnouncementContext = createContext({} as iAnnouncementContext);

const AnnouncementProvider = ({ children }: iAnnouncementProviderProps) => {

  const [announcement, setAnnouncement] = useState<iAnnouncement[]>([])
  const [globalLoading, setGlobalLoading] = useState(false)
  console.log(globalLoading)
  useEffect(() => {



    const getAnnouncement = async () => {
      setGlobalLoading(true)
      try {

        const response = await api.get('/announcement?_expand=user')
        setAnnouncement(response.data)

      } catch (error) {

        console.error(error)

      } finally {
        setGlobalLoading(false)
      }

    }
    getAnnouncement()


  }, [])


  const value = {
    announcement,
    globalLoading,
    setGlobalLoading
  }

  return (
    <AnnouncementContext.Provider value={value}>
      {children}
    </AnnouncementContext.Provider>
  );
};

export default AnnouncementProvider;
