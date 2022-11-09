import { Link } from "react-router-dom";

import { DefaultDoubtsBox } from "./style";
import { Container } from "../../../styles/global";

const DefaultDoubts = () => {
  return (
    <>
      <Container>
        <DefaultDoubtsBox>
          <h2>
            Tem alguma <span>dúvida</span> ?
          </h2>
          <p>
            Acesse nossa página e entre em contato conosco, te responderemos em
            breve.
          </p>
          <Link to="/contact">Contato</Link>
        </DefaultDoubtsBox>
      </Container>
    </>
  );
};

export default DefaultDoubts;
