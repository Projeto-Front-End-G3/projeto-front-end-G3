import Header from "../../components/Header";
import Filters from "../../components/Filters";
import { ContainerGeneral } from "./styled";
import Cards from "../../components/Cards";
import { useContext } from "react";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import ModalCreateAnnouncement from "../../components/Modal/ModalCreateAnnouncement";

const DashboardPage = () => {
  const { openClose } = useContext(AnnouncementContext);

  return (
    <ContainerGeneral>
      <Header />
      <Filters />
      <Cards />
      {openClose && <ModalCreateAnnouncement />}
    </ContainerGeneral>
  );
};

export default DashboardPage;
