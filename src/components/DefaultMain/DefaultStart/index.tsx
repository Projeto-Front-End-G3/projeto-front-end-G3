import executivos from '../../../assets/executivos.png'
import { MainFooter } from './style'

const DefaultStart = () => {

  return (
    <>
      <MainFooter>
        <img src={executivos} alt="" className='backgroundImg' />
        <h1>Anuncie seu serviço na <span>Disclosure</span></h1>
        <p>Porque a sua empresa é nossa prioridade</p>
        <button>Quero anunciar meu serviço</button>
      </MainFooter>
    </>
  )
}

export default DefaultStart