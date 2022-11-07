import { Link } from "react-router-dom";
import { Container } from "../../../styles/global";
import { DefaultAboutUsBox } from "./style";

const DefaultAboutUs = () => {
  return (
    <>
      <Container>
        <DefaultAboutUsBox>
          <h2>
            Um pouco sobre a <span>Disclosure</span>
          </h2>
          <div>
            <h3>Quem somos nós</h3>
            <p>
              Temos como finalidade a <span>divulgação de serviços</span> e
              empresas em geral, levando-as <span>a diversos clientes</span>.
            </p>
            <Link to="/about">Saiba mais</Link>
          </div>
        </DefaultAboutUsBox>
      </Container>
    </>
  );
};

export default DefaultAboutUs;
