import { createContext, ReactNode, useEffect, useState } from "react";
import { FaDoorClosed } from "react-icons/fa";
import api from "../../services/api";

type iAnnouncementProviderProps = {
  children: ReactNode;
};

interface iAnnouncementContext {
  announcement: iAnnouncement[];
  globalLoading: boolean;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
  addAnnouncement: (body: iAddAnnouncement) => void;
  openClose: boolean;
  setOpenClose: React.Dispatch<React.SetStateAction<boolean>>;
  profile: boolean;
  setProfile: React.Dispatch<React.SetStateAction<boolean>>;
}

interface iAnnouncement {
  user: iUserDate;
  body: string;
}

interface iUserDate {
  name: string;
  img: string;
}

interface iAddAnnouncement {
  publicationText?: string;
  announceType?: string;
}

export const AnnouncementContext = createContext({} as iAnnouncementContext);

const AnnouncementProvider = ({ children }: iAnnouncementProviderProps) => {
  const [announcement, setAnnouncement] = useState<iAnnouncement[]>([]);
  const [globalLoading, setGlobalLoading] = useState(false);
  const [openClose, setOpenClose] = useState(false);
  const [profile, setProfile] = useState(false);

  const token = localStorage.getItem("@Disclosure:token");

  useEffect(() => {
    const getAnnouncement = async () => {
      setGlobalLoading(true);
      try {
        const response = await api.get("/announcement?_expand=user");
        setAnnouncement(response.data);
        console.log(announcement);
        
      } catch (error) {
        console.error(error);
      } finally {
        setGlobalLoading(false);
      }
    };
    getAnnouncement();
  }, []);

  const addAnnouncement = async (body: iAddAnnouncement): Promise<void> => {
    setGlobalLoading(true);
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const response = await api.post("/announcement", body);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setGlobalLoading(false);
    }
  };

  const value = {
    announcement,
    globalLoading,
    setGlobalLoading,
    addAnnouncement,
    openClose,
    setOpenClose,
    profile,
    setProfile,
  };

  return (
    <AnnouncementContext.Provider value={value}>
      {children}
    </AnnouncementContext.Provider>
  );
};

export default AnnouncementProvider;
