import Header from "../../components/HeaderHomeLogged";
import Filters from "../../components/Filters";
import { ContainerGeneral } from "./styled";
import Cards from "../../components/Cards";
import DefaultHeader2 from "../../components/DefaultHeader/DefaultHeader2";

const DashboardLogged = () => {
  return (
    <ContainerGeneral>
      <DefaultHeader2 />
      <Filters />
      <Cards />
    </ContainerGeneral>
  );
};

export default DashboardLogged;
