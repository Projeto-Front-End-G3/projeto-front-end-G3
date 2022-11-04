import logo from '../../assets/logo.png'
import { FiMenu } from 'react-icons/fi'
import { Header } from './style'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

const DefaultHeader = () => {

  const { handleMenu } = useContext(UserContext)

  return (
    <>
      <Header>
        <div>
          <img src={logo} alt="Disclosure " />
          <p>Disclosure</p>
        </div>
        <FiMenu className='menu' onClick={handleMenu} />
      </Header>
    </>
  )
}

export default DefaultHeader