import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenuOpen } from 'react-icons/md';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';
import perfil from '../../../assets/moeda.png';
import { UserContextNormal } from '../../../contexts/UserContextNormal';
import { StyledContainer, StyledUser } from './style';

const User = () => {
  const { user, setUser } = useContext(UserContextNormal);
  const [isClick, setIsClick] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleOutclick = (event) => {
      const target = event.target;
      if (!modalRef.current.contains(target)) {
        setIsClick(false);
      }
    };

    document.addEventListener('mousedown', handleOutclick);

    return () => {
      document.removeEventListener('mousedown', handleOutclick);
    };
  }, []);

  return (
    <>
      {user && (
        <StyledUser isClick={isClick}>
          <StyledContainer>
            <figure>
              <img src={perfil} alt='user' />
            </figure>
            <button
              type='button'
              onClick={() => {
                setIsClick(true);
              }}
            >
              <MdMenuOpen />
            </button>
          </StyledContainer>
          <nav ref={modalRef}>
            <Link to='/'>Minha Conta</Link>
            <button
              type='button'
              onClick={() => {
                setUser(false);
              }}
            >
              Sair &nbsp; <RiLogoutCircleRLine />
            </button>
            <button
              className='close'
              type='button'
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
