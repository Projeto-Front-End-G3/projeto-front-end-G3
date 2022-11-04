import { ArticleContainer } from "./style"
import moeda from '../../../assets/moeda.png'
import { Container } from "../../../styles/global"

const Disclosures = () => {

  return (
    <>
      <Container>
        <ArticleContainer>
          <div>
            <img src={moeda} alt="" />
            <h3>Teste</h3>
          </div>

          <p>
            asdasdasd asdasdasda asdasdasd asdasdasd
            asdasdasd asdasdasd asdasdasd asdasdasd asd
            asdasdasd asdasdasd asdasdasd asdasdasd
            asdasd asdasdasd asdasdasdasd asdasdasdasd
            sadasd asdasdasdasdasda asdasdasd asdasdasda
          </p>
          <button>Saiba mais</button>
        </ArticleContainer>

        <ArticleContainer>
          <div>
            <img src={moeda} alt="" />
            <h3>Teste</h3>
          </div>

          <p>
            asdasdasd asdasdasda asdasdasd asdasdasd
            asdasdasd asdasdasd asdasdasd asdasdasd asd
            asdasdasd asdasdasd asdasdasd asdasdasd
            asdasd asdasdasd asdasdasdasd asdasdasdasd
            sadasd asdasdasdasdasda asdasdasd asdasdasda
          </p>
          <button>Saiba mais</button>
        </ArticleContainer>
      </Container>
    </>
  )
}

export default Disclosures