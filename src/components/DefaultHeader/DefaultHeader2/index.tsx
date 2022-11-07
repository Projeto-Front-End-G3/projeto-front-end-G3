import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { Header2 } from "./style";

const DefaultHeader2 = () => {
  return (
    <>
      <Header2>
        <div>
          <img src={logo} alt="Disclosure " />
          <p>Disclosure</p>
        </div>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/about">Sobre nós</Link>
          <Link to="/contact">Contato</Link>
        </nav>
        <span>
          <Link to="/login">Logar</Link>
          <Link to="/register">Cadastrar</Link>
        </span>
      </Header2>
    </>
  );
};

export default DefaultHeader2;
