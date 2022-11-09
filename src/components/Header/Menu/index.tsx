import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

import Buttons from "../Buttons";
import { StyledMenu } from "./style";
import { UserContext } from "../../../contexts/UserContext";

interface iMenuProps {
  isClick?: boolean;
  setIsClick?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ isClick, setIsClick }: iMenuProps) => {
  const { authorized } = useContext(UserContext);

  return (
    <StyledMenu isClick={isClick}>
      <nav>
        <Link to={authorized ? "/dashboard" : "/"}>Inicio</Link>
        <Link to="/about">Quem Somos</Link>
        <Link to="/contact">Contato</Link>
        <Buttons />
        {setIsClick && (
          <button
            type="button"
            onClick={() => {
              setIsClick(false);
            }}
          >
            <IoMdClose />
          </button>
        )}
      </nav>
    </StyledMenu>
  );
};

export default Menu;
