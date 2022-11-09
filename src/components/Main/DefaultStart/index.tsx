import { Link } from "react-router-dom";

import { Container } from "./style";
import SiteArt1 from "../../../assets/siteart1.png";

const DefaultStart = () => {
  return (
    <>
      <Container>
        <img src={SiteArt1} alt="" className="backgroundImg" />
        <h1>
          Anuncie seu serviço na <span>Disclosure</span>
        </h1>
        <p>Porque a sua empresa é nossa prioridade</p>
        <Link to="/register">Quero anunciar meu serviço</Link>
      </Container>
    </>
  );
};

export default DefaultStart;
