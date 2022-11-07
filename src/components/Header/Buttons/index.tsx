import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContextNormal } from '../../../contexts/UserContextNormal';
import { StyledButtons } from './style';

const Buttons = () => {
  const { user } = useContext(UserContextNormal);
  return (
    <>
      {!user && (
        <StyledButtons>
          <Link to='/'>Logar</Link>
          <Link to='/'>Cadastrar</Link>
        </StyledButtons>
      )}
    </>
  );
};

export default Buttons;
