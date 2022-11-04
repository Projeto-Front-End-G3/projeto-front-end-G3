import { Container } from '../../../styles/global'
import imoveis from '../../../assets/casa.png'
import moeda from '../../../assets/moeda.png'
import carro from '../../../assets/carro.png'
import rolo from '../../../assets/rolo.png'
import pesquisar from '../../../assets/pesquisar.png'
import { ServicesBox } from './style'

const DefaultServices = () => {

  return (
    <>
      <Container>
        <ServicesBox>
          <section>
            <button>Logar</button>
            <button>Cadastrar</button>
          </section>

          <ul>
            <li>
              <img src={imoveis} alt="imóveis" />
              <p>Imóveis</p>
            </li>
            <li>
              <img src={moeda} alt="finanças" />
              <p>Finanças</p>
            </li>
            <li>
              <img src={carro} alt="auto-peças" />
              <p>Peças</p>
            </li>
            <li>
              <img src={rolo} alt="serviços" />
              <p>Serviços</p>
            </li>
          </ul>

          <div>
            <input type="text" placeholder='Estou procurando por...' />
            <img src={pesquisar} alt="" className='searchImg' />
          </div>
        </ServicesBox>
      </Container>
    </>
  )
}

export default DefaultServices