import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { StyledContainer, StyledUser } from "./style";
import { UserContext } from "../../../contexts/UserContext";

const User = () => {
  const { authorized, userData, logout } = useContext(UserContext);
  const [isClick, setIsClick] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleOutclick = (event) => {
      const target = event.target;
      if (!modalRef.current.contains(target)) {
        setIsClick(false);
      }
    };

    document.addEventListener("mousedown", handleOutclick);

    return () => {
      document.removeEventListener("mousedown", handleOutclick);
    };
  }, []);

  return (
    <>
      {authorized && (
        <StyledUser isClick={isClick}>
          <StyledContainer>
            <figure>
              <img src={userData?.img} alt="user" />
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
          <nav ref={modalRef}>
            <Link to="/">Minha Conta</Link>
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
