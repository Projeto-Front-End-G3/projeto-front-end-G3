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
  filter: string;
  loading: boolean;
  openModalAnnouncement: boolean;
  openModalProfile: boolean;
  getAnnouncement: () => Promise<void>;
  addAnnouncement: (formData: iAddAnnouncement) => void;
  deleteAnnouncement: (announcementId: number) => Promise<void>;
  filterAnnouncements: () => iAnnouncement[];
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  setOpenModalAnnouncement: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModalProfile: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [filter, setFilter] = useState("todos");
  const [loading, setLoading] = useState(false);
  const [openModalAnnouncement, setOpenModalAnnouncement] = useState(false);
  const [openModalProfile, setOpenModalProfile] = useState(false)

  const getAnnouncement = async () => {
    setLoading(true);

    try {
      const { data } = await api.get("/announcement?_expand=user");

      setAnnouncements([...data].reverse());
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addAnnouncement = async (formData: iAddAnnouncement) => {
    setLoading(true);

    try {
      await api.post("/announcement", formData);
      await getAnnouncement();

      toast.success("Anúncio criado com sucesso!");
    } catch (_) {
      toast.error("Algo deu errado :(");
    } finally {
      setLoading(false);
    }
  };

  const deleteAnnouncement = async (announcementId: number) => {
    setLoading(true);

    try {
      await api.delete(`/announcement/${announcementId}`);
      await getAnnouncement();

      toast.success("Anúncio deletado com sucesso!");
    } catch (_) {
      toast.error("Algo deu errado :(");
    } finally {
      setLoading(false);
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
    filter,
    loading,
    openModalAnnouncement,
    openModalProfile,
    getAnnouncement,
    addAnnouncement,
    deleteAnnouncement,
    filterAnnouncements,
    setFilter,
    setOpenModalAnnouncement,
    setOpenModalProfile,
  };

  return (
    <AnnouncementContext.Provider value={value}>
      {children}
    </AnnouncementContext.Provider>
  );
};

export default AnnouncementProvider;
