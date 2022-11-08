import { createContext, useEffect, useState } from "react";

import api from "../../services/api";
import { iUser } from "../UserContext";
import { iAddAnnouncement } from "../../components/Modal/ModalCreateAnnouncement";
import { toast } from "react-toastify";

type iAnnouncementProviderProps = {
  children: React.ReactNode;
};

interface iAnnouncementTypes {
  announcements: iAnnouncement[];
  globalLoading: boolean;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
  addAnnouncement: (body: iAddAnnouncement) => void;
  openClose: boolean;
  setOpenClose: React.Dispatch<React.SetStateAction<boolean>>;
  profile: boolean;
  setProfile: React.Dispatch<React.SetStateAction<boolean>>;
  deleteAnnouncement: (announcementId: number) => Promise<void>;
  filterAnnouncements: (announcementType: string) => Promise<void>;
  filter: string;
}

export interface iAnnouncement {
  body: string;
  id: number;
  type: string;
  user: iUser;
  userId: number;
}

export const AnnouncementContext = createContext({} as iAnnouncementTypes);

const AnnouncementProvider = ({ children }: iAnnouncementProviderProps) => {
  const [announcements, setAnnouncements] = useState<iAnnouncement[]>([]);
  const [filter, setFilter] = useState("");
  const [globalLoading, setGlobalLoading] = useState(false);
  const [openClose, setOpenClose] = useState(false);
  const [profile, setProfile] = useState(false);

  const getAnnouncement = async () => {
    setGlobalLoading(true);

    try {
      const response = await api.get("/announcement?_expand=user");

      setAnnouncements(response.data);
      setGlobalLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setGlobalLoading(false);
    }
  };

  const addAnnouncement = async (body: iAddAnnouncement): Promise<void> => {
    setGlobalLoading(true);

    try {
      await api.post("/announcement", body);

      getAnnouncement();
      toast.success("Anúncio criado com sucesso!");
    } catch (_) {
      toast.error("Algo deu errado :(");
    } finally {
      setGlobalLoading(false);
    }
  };

  const deleteAnnouncement = async (announcementId: number) => {
    setGlobalLoading(true);

    try {
      await api.delete(`/announcement/${announcementId}`);

      getAnnouncement();
      toast.success("Anúncio deletado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  const filterAnnouncements = async (announcementType: string) => {
    if (announcementType === "todos") {
      setFilter("");
    } else {
      setFilter(announcementType);
    }
  };

  useEffect(() => {
    getAnnouncement();
  }, []);

  const value = {
    announcements,
    globalLoading,
    setGlobalLoading,
    addAnnouncement,
    openClose,
    setOpenClose,
    profile,
    setProfile,
    deleteAnnouncement,
    filterAnnouncements,
    filter,
  };

  return (
    <AnnouncementContext.Provider value={value}>
      {children}
    </AnnouncementContext.Provider>
  );
};

export default AnnouncementProvider;
