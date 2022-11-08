import Header from "../../components/Header";
import Filters from "../../components/Filters";
import { ContainerGeneral } from "./styled";
import Cards from "../../components/Cards";
import ModalCriarPost from "../../components/Modal/ModalCriarPost";
import { useContext } from "react";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";

const DashboardPage = () => {
  const { openClose } = useContext(AnnouncementContext);

  return (
    <ContainerGeneral>
      <Header />
      <Filters />
      <Cards />
      {openClose && <ModalCriarPost />}
    </ContainerGeneral>
  );
};

export default DashboardPage;
