import { Container } from '../../../styles/global'
import { MainFooter } from './style'
import executivos from '../../../assets/executivos.png'

const DefaultFooter = () => {

  return (
    <>
      <Container>
        <MainFooter>
          <img src={executivos} alt="" className='backgroundImg' />
          <button>Quero anunciar meu serviço</button>

          <p>
            Sua empresa será vista por milhares de usuarios
            que entram diariamente em nosso site.
          </p>
          <br />
          <p>
            Nossa empresa
            tem como finalidade a divulgação de serviços e
            empresas em geral, levando-as a diversos clientes.
          </p>
        </MainFooter>
      </Container>
    </>
  )
}

export default DefaultFooter