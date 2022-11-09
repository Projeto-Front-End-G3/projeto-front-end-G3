import { useContext, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Header } from "./style";
import Logo from "../../assets/logo.png";
import {
  StyledViewButtons,
  StyledViewMenu,
  StyledViewUser,
} from "../Header/style";
import User from "../Header/User";
import { UserContext } from "../../contexts/UserContext";
import Menu from "../Header/Menu";
import Buttons from "../Header/Buttons";

const DefaultHeader = () => {
  const { authorized } = useContext(UserContext);
  const [isClick, setClick] = useState(false);

  return (
    <>
      <Header>
        <div>
          <img src={Logo} alt="Disclosure " />
          <p>Disclosure</p>
        </div>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/about">Sobre nós</Link>
          <Link to="/contact">Contato</Link>
        </nav>
        {authorized ? (
          <StyledViewUser mediaView="medium" isClick={isClick}>
            <User />
          </StyledViewUser>
        ) : (
          <>
            <StyledViewMenu mediaView="medium">
              <span>
                <Link to="/login">Logar</Link>
                <Link to="/register">Cadastrar</Link>
              </span>
              <FiMenu
                className="menu"
                onClick={() => {
                  setClick(!isClick);
                }}
              />
            </StyledViewMenu>
          </>
        )}
      </Header>
    </>
  );
};

export default DefaultHeader;