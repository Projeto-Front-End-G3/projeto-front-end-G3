import { Link } from "react-router-dom"
import { Container } from "../../../styles/global"
import { DefaultAboutUsBox } from "./style"

const DefaultAboutUs = () => {

  return (
    <>
      <Container>
        <DefaultAboutUsBox>
          <h2>Um pouco sobre a <span>Disclosure</span></h2>

          <div>
            <h3>Quem somos nós</h3>
            <p>
              Temos como finalidade a <span>divulgação de serviços</span> e
              empresas em geral, levando-as <span>a diversos clientes</span>.
            </p>
          <Link to="/about">Saiba mais</Link>
          </div>


          {/* <div>
            <h3>Como surgimos</h3>
            <p>
              A Disclosure é uma empresa brasileira fundada em 31 de outubro de 2022
              por Lucas Sores e Flavio Gimenez. A empresa ganhou notoriedade após ser
              o <span>melhor projeto do M3-T13 na Kenzie Academy Brasil</span>.
            </p>
          </div>

          <div>
            <h3>Nossa equipe</h3>
            <p>
              Hoje contamos com <span>7 desenvolvedores</span>, sendo eles Flavio
              Gimenez, Lucas Bueno, Kenji Shigaki, Lucas Soares, Gabriel Augusto, 
              João Pedro e Vinicuis Quirino.
            </p>
          </div> */}
        </DefaultAboutUsBox>
      </Container>
    </>
  )
}

export default DefaultAboutUs