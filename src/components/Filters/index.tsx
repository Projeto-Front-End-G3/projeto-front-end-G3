import React, { useContext } from "react";
import { ContainerFilters } from "./styled";
import { MdAddCircleOutline } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { BsCoin } from "react-icons/bs";
import { AiOutlineCar } from "react-icons/ai";
import { TfiPaintRoller } from "react-icons/tfi";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";

const Filters = () => {
  const { setOpenClose, filterAnnouncements } = useContext(AnnouncementContext);

  return (
    <ContainerFilters>
      <div onClick={() => setOpenClose(true)} className="newAdd">
        <p>Novo anúncio</p>
        <MdAddCircleOutline />
      </div>
      <div className="filtersCenter">
        <ul>
          <li onClick={() => filterAnnouncements("Finanças")}>
            <GoHome />
            <p>Imóveis</p>
          </li>
          <li>
            <BsCoin />
            <p>Finanças</p>
          </li>
          <li>
            <AiOutlineCar />
            <p>Auto-peças</p>
          </li>
          <li>
            <TfiPaintRoller />
            <p>Serviços</p>
          </li>
        </ul>
        <div>
          <input type="text" placeholder="Estou procurando por..." />
          <BiSearchAlt2 />
        </div>
      </div>
    </ContainerFilters>
  );
};

export default Filters;
