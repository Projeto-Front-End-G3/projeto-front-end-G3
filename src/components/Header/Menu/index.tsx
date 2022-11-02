import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { StyledMenu } from './style';

interface iMenuProps {
  isClick?: boolean;
  setIsClick?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ isClick, setIsClick }: iMenuProps) => {
  return (
    <StyledMenu isClick={isClick}>
      <nav>
        <Link to='/'>Inicio</Link>
        <Link to='/'>Quem Somos</Link>
        <Link to='/'>Contato</Link>
        {setIsClick && (
          <button
            type='button'
            onClick={() => {
              setIsClick(false);
            }}
          >
            <IoMdClose />
          </button>
        )}
      </nav>
    </StyledMenu>
  );
};

export default Menu;
