import { useContext } from "react";

import { ContainerGeneral } from "./styled";
import Header from "../../components/Header";
import Filters from "../../components/Filters";
import Cards from "../../components/Cards";
import ModalCreateAnnouncement from "../../components/Modal/ModalCreateAnnouncement";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";

const DashboardPage = () => {
  const { openModalAnnouncement } = useContext(AnnouncementContext);

  return (
    <ContainerGeneral>
      <Header />
      <Filters />
      <Cards />
      {openModalAnnouncement && <ModalCreateAnnouncement />}
    </ContainerGeneral>
  );
};

export default DashboardPage;
