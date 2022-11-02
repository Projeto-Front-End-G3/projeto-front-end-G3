import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImMenu3 } from 'react-icons/im';
import logo from '../../../assets/logo.svg';

const User = () => {
  const [isUser, setIsUser] = useState(true);
  const [isClickModal, setIsClickModal] = useState(false);
  return (
    <div className='user'>
      <img src={logo} alt='user' />
      <button
        type='button'
        onClick={() => {
          setIsClickModal(true);
        }}
      >
        <ImMenu3 />
      </button>
      <nav>
        <Link to='/'>Minha Conta</Link>
        <button type='button'>Sair</button>
      </nav>
    </div>
  );
};

export default User;
