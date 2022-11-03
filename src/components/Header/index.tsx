import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImMenu } from 'react-icons/im';
import logo from '../../assets/logo.svg';
import {
  StyledContainer,
  StyledHeader,
  StyledViewButtons,
  StyledViewMenu,
  StyledViewUser,
} from './style';
import Menu from './Menu';
import Buttons from './Buttons';
import User from './User';
import { UserContextNormal } from '../../contexts/UserContextNormal';

const Header = () => {
  const { user } = useContext(UserContextNormal);
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
          <StyledViewMenu mediaView='medium'>
            <Menu />
            <StyledViewButtons mediaView='medium'>
              <Buttons />
            </StyledViewButtons>
          </StyledViewMenu>
          <StyledViewUser mediaView='medium' isClick={isClick}>
            <User />
          </StyledViewUser>
          <StyledViewButtons mediaView='big'>
            <Buttons />
          </StyledViewButtons>
        </StyledContainer>
      </StyledHeader>
      <StyledViewMenu user={user} mediaView='small' isClick={isClick}>
        <Menu isClick={isClick} setIsClick={setIsClick} />
        <StyledViewUser mediaView='small' isClick={isClick}>
          <User />
        </StyledViewUser>
      </StyledViewMenu>
      <StyledViewButtons mediaView='small'>
        <Buttons />
      </StyledViewButtons>
    </>
  );
};

export default Header;
