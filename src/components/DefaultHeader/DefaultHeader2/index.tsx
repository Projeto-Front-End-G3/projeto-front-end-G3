import logo from '../../../assets/logo.png'
import { Header2 } from './style'

const DefaultHeader2 = () => {

  return (
    <>
      <Header2>
        <div>
          <img src={logo} alt="Disclosure " />
          <p>Disclosure</p>
        </div>

        <nav>
          <p>Início</p>
          <p>Sobre nós</p>
          <p>Contato</p>
        </nav>

        <span>
          <button>Logar</button>
          <button>Cadastrar</button>
        </span>
      </Header2>
    </>
  )
}

export default DefaultHeader2