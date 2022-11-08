import { useContext, useEffect, useRef, useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

import ModalHomePage from "../../Modal/ModalPerfilUser";
import { StyledContainer, StyledUser } from "./style";
import { UserContext } from "../../../contexts/UserContext";
import { AnnouncementContext } from "../../../contexts/AnnouncementContext";

const User = () => {
  const { authorized, userData, logout } = useContext(UserContext);
  const { profile, setProfile } = useContext(AnnouncementContext);
  const [isClick, setIsClick] = useState(false);
  // const modalRef = useRef();

  // useEffect(() => {
  //   const handleOutclick = (event) => {
  //     const target = event.target;
  //     if (!modalRef.current.contains(target)) {
  //       setIsClick(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleOutclick);

  //   return () => {
  //     document.removeEventListener("mousedown", handleOutclick);
  //   };
  // }, []);

  return (
    <>
      {authorized && (
        <StyledUser isClick={isClick}>
          <StyledContainer>
            <figure>
              <img src={userData?.profilePicture} alt="user" />
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
          {/* <nav ref={modalRef}> */}
          <nav>
            <button onClick={() => setProfile(true)}>Minha Conta</button>
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
          {profile && <ModalHomePage />}
        </StyledUser>
      )}
    </>
  );
};

export default User;
