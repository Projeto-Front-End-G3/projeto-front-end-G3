import { useContext, useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

import { StyledContainer, StyledUser } from "./style";
import { UserContext } from "../../../contexts/UserContext";
import { AnnouncementContext } from "../../../contexts/AnnouncementContext";

const User = () => {
  const { authorized, userData, logout } = useContext(UserContext);
  const { setOpenModalProfile } = useContext(AnnouncementContext);
  const [isClick, setIsClick] = useState(false);

  return (
    <>
      {authorized && (
        <StyledUser isClick={isClick}>
          <StyledContainer>
            <figure>
              <img src={userData?.profilePicture} alt={userData?.name} />
            </figure>
            <button
              type="button"
              onClick={() => {
                setIsClick(!isClick);
              }}
            >
              <MdMenuOpen />
            </button>
          </StyledContainer>
          <nav>
            <button onClick={() => setOpenModalProfile(true)}>
              Minha Conta
            </button>
            <button
              type="button"
              onClick={() => {
                logout();
              }}
            >
              Sair &nbsp; <RiLogoutCircleRLine />
            </button>
            <button
              className="close"
              type="button"
              onClick={() => {
                setIsClick(false);
              }}
            >
              <IoMdClose />
            </button>
          </nav>
        </StyledUser>
      )}
    </>
  );
};

export default User;
