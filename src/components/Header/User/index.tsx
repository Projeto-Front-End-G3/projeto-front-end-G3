import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImMenu3 } from 'react-icons/im';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';
import logo from '../../../assets/logo.svg';
import { UserContextNormal } from '../../../contexts/UserContextNormal';
import { StyledContainer, StyledUser } from './style';

const User = () => {
  const { user, setUser } = useContext(UserContextNormal);
  const [isClick, setIsClick] = useState(false);
  return (
    <>
      {user && (
        <StyledUser isClick={isClick}>
          <StyledContainer>
            <figure>
              <img src={logo} alt='user' />
            </figure>
            <button
              type='button'
              onClick={() => {
                setIsClick(true);
              }}
            >
              <ImMenu3 />
            </button>
          </StyledContainer>
          <nav>
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
