import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import logo from "../../assets/logo.svg";
import {
  StyledContainer,
  StyledHeader,
  StyledViewButtons,
  StyledViewMenu,
  StyledViewUser,
} from "./style";
import Menu from "./Menu";
import Buttons from "./Buttons";
import User from "./User";
import { UserContext } from "../../contexts/UserContext";

const Header = () => {
  const { authorized } = useContext(UserContext);
  const [isClick, setIsClick] = useState(false);

  return (
    <>
      <StyledHeader isClick={isClick}>
        <StyledContainer isClick={isClick}>
          <Link to="/">
            <img src={logo} alt="Disclosure" />
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
          <StyledViewButtons mediaView="big">
            <Buttons />
          </StyledViewButtons>
        </StyledContainer>
      </StyledHeader>
      <StyledViewMenu user={authorized} mediaView="small" isClick={isClick}>
        <Menu isClick={isClick} setIsClick={setIsClick} />
        <StyledViewUser mediaView="small" isClick={isClick}>
          <User />
        </StyledViewUser>
      </StyledViewMenu>
      <StyledViewButtons mediaView="small">
        <Buttons />
      </StyledViewButtons>
    </>
  );
};

export default Header;
