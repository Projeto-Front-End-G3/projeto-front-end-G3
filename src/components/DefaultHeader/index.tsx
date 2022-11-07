import { useState } from "react";
import { FiMenu } from "react-icons/fi";

import { Header } from "./style";
import Logo from "../../assets/logo.png";
import { StyledViewButtons, StyledViewMenu } from "../Header/style";
import Menu from "../Header/Menu";
import Buttons from "../Header/Buttons";

const DefaultHeader = () => {
  const [isClick, setClick] = useState(false);
  
  return (
    <>
      <Header>
        <div>
          <img src={Logo} alt="Disclosure " />
          <p>Disclosure</p>
        </div>
        <FiMenu
          className="menu"
          onClick={() => {
            setClick(!isClick);
          }}
        />
      </Header>
    </>
  );
};

export default DefaultHeader;
