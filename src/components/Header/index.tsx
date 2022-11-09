import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";

import {
  StyledContainer,
  StyledHeader,
  StyledViewButtons,
  StyledViewMenu,
  StyledViewUser,
} from "./styles";
import Menu from "./Menu";
import Buttons from "./Buttons";
import User from "./User";
import ModalProfile from "../Modal/ModalProfile";
import { UserContext } from "../../contexts/UserContext";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import Logo from "../../assets/logo.png";

const Header = () => {
  const { authorized } = useContext(UserContext);
  const { profile } = useContext(AnnouncementContext);
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 650) {
        setIsClick(false);
      }
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <StyledHeader isClick={isClick}>
        <StyledContainer isClick={isClick}>
          <Link to={authorized ? "/dashboard" : "/"}>
            <img src={Logo} alt="Disclosure " />
            <h1>Disclosure</h1>
          </Link>
          <button
            type="button"
            onClick={() => {
              setIsClick(true);
            }}
          >
            <MdMenu />
          </button>
          <StyledViewMenu mediaView="medium">
            <Menu />
            <StyledViewButtons mediaView="medium">
              <Buttons />
            </StyledViewButtons>
          </StyledViewMenu>
          <StyledViewUser mediaView="medium" isClick={isClick}>
            <User />
          </StyledViewUser>
          {!authorized && (
            <StyledViewButtons mediaView="big">
              <Buttons />
            </StyledViewButtons>
          )}
        </StyledContainer>
      </StyledHeader>
      <StyledViewMenu user={authorized} mediaView="small" isClick={isClick}>
        <Menu isClick={isClick} setIsClick={setIsClick} />
        <StyledViewUser mediaView="small" isClick={isClick}>
          <User />
        </StyledViewUser>
      </StyledViewMenu>
      {profile && <ModalProfile />}
    </>
  );
};

export default Header;
