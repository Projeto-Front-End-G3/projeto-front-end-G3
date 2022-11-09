import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";
import { iUser } from "../UserContext";
import { iAddAnnouncement } from "../../components/Modal/ModalCreateAnnouncement";

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
  filterAnnouncements: () => iAnnouncement[];
  getAnnouncement: () => Promise<void>;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
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
  const [globalLoading, setGlobalLoading] = useState(false);
  const [filter, setFilter] = useState("todos");
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

      await getAnnouncement();
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
      await getAnnouncement();

      toast.success("Anúncio deletado com sucesso!");
    } catch (_) {
      toast.error("Algo deu errado :(");
    }
  };

  const filterAnnouncements = () => {
    if (filter === "todos" || filter === "") {
      return announcements;
    } else {
      return announcements.filter(
        (announcement) =>
          announcement["type"] == filter ||
          announcement["user"]["name"].toLocaleLowerCase().includes(filter)
      );
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
    getAnnouncement,
    setFilter,
    filter,
  };

  return (
    <AnnouncementContext.Provider value={value}>
      {children}
    </AnnouncementContext.Provider>
  );
};

export default AnnouncementProvider;
