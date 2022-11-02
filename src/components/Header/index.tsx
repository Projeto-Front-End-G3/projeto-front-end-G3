import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { ImMenu } from 'react-icons/im';
import logo from '../../assets/logo.svg';
import { StyledContainer, StyledHeader, StyledMenu } from './style';

const Header = () => {
  const [isClick, setIsClick] = useState(false);
  return (
    <>
      <StyledHeader isClick={isClick}>
        <StyledContainer isClick={isClick}>
          <Link to='/'>
            <img src={logo} alt='Disclosure' />
            <h1>Disclosure</h1>
          </Link>
          <button
            type='button'
            onClick={() => {
              setIsClick(true);
            }}
          >
            <ImMenu />
          </button>
          <nav className='menu'>
            <Link to='/'>Inicio</Link>
            <Link to='/'>Quem Somos</Link>
            <Link to='/'>Contato</Link>
          </nav>
          <nav className='buttons'>
            <Link to='/'>Logar</Link>
            <Link to='/'>Cadastrar</Link>
          </nav>
        </StyledContainer>
      </StyledHeader>
      <StyledMenu isClick={isClick}>
        <div className='modal'>
          <Link to='/'>Inicio</Link>
          <Link to='/'>Quem Somos</Link>
          <Link to='/'>Contato</Link>
          <button
            type='button'
            onClick={() => {
              setIsClick(false);
            }}
          >
            <IoMdClose />
          </button>
        </div>
      </StyledMenu>
    </>
  );
};

export default Header;
