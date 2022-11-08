import { Link } from "react-router-dom";
import executivos from "../../../assets/executivos.png";
import { MainFooter } from "./style";

const DefaultStart = () => {
  return (
    <>
      <MainFooter>
        <img src={executivos} alt="" className="backgroundImg" />
        <h1>
          Anuncie seu serviço na <span>Disclosure</span>
        </h1>
        <p>Porque a sua empresa é nossa prioridade</p>
        <Link to="/register">Quero anunciar meu serviço</Link>
      </MainFooter>
    </>
  );
};

export default DefaultStart;
