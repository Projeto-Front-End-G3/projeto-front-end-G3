import { useContext } from "react";
import { AiOutlineCar, AiOutlineUnorderedList } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsCoin } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { MdAddCircleOutline } from "react-icons/md";
import { TfiPaintRoller } from "react-icons/tfi";

import { ContainerFilters } from "./styles";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";

const Filters = () => {
  const { setOpenModalAnnouncement, setFilter } = useContext(AnnouncementContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value.toLocaleLowerCase());
  };

  return (
    <ContainerFilters>
      <div onClick={() => setOpenModalAnnouncement(true)} className="newAdd">
        <p>Novo anúncio</p>
        <MdAddCircleOutline />
      </div>
      <div className="filtersCenter">
        <ul>
          <li onClick={() => setFilter("todos")}>
            <AiOutlineUnorderedList />
            <p>Todos</p>
          </li>
          <li onClick={() => setFilter("imoveis")}>
            <GoHome />
            <p>Imóveis</p>
          </li>
          <li onClick={() => setFilter("financas")}>
            <BsCoin />
            <p>Finanças</p>
          </li>
          <li onClick={() => setFilter("auto-pecas")}>
            <AiOutlineCar />
            <p>Auto-peças</p>
          </li>
          <li onClick={() => setFilter("servicos")}>
            <TfiPaintRoller />
            <p>Serviços</p>
          </li>
        </ul>
        <div>
          <input
            type="text"
            placeholder="Estou procurando por..."
            onChange={handleChange}
          />
          <BiSearchAlt2 />
        </div>
      </div>
    </ContainerFilters>
  );
};

export default Filters;
