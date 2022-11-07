import Header from "../../components/HeaderHomeLogged";
import Filters from "../../components/Filters";
import { ContainerGeneral } from "./styled";
import Cards from "../../components/Cards";
import DefaultHeader2 from "../../components/DefaultHeader";
import ModalCriarPost from "../../components/Modal/ModalCriarPost";
import { useContext, useState } from "react";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import { UserContext } from "../../contexts/UserContext";

const DashboardPage = () => {
  const { openClose } = useContext(AnnouncementContext);
  const {authorized} = useContext(UserContext)

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
