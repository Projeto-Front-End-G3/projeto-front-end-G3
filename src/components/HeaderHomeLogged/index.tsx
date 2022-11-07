import { FaBars } from 'react-icons/fa'
import logo from '../../assets/logo.png'
import { Container } from './styled'
import { useState } from 'react'
import casa from '../../assets/casa.png'
import { TiArrowSortedDown } from 'react-icons/ti'
import { FiEdit } from 'react-icons/fi'
import { MdOutlineExitToApp } from 'react-icons/md'

const Header = () => {
    const [headerOpenClose, setHeaderOpenClose] = useState(false)
    const [options, setOptions] = useState(false)

    return (
        <Container isOpen={headerOpenClose} options={options}>
            <div className="headers-container">
                <div className="headers-general">
                    <div>
                        <img src={logo} alt="Logo Disclosure" />
                        <h2>Disclosure</h2>
                    </div>
                    <FaBars onClick={() => setHeaderOpenClose(!headerOpenClose)} />
                </div>

                <div className="animation">
                    <nav className='nav-animation'>
                        <ul>

                            <li className="start">Inicio</li>

                            <li className="about-us">Sobre nós</li>

                            <li className="contact">Contato</li>

                            <li className="edit display">Minha conta</li>

                            <li className="exit display">Sair</li>

                        </ul>
                    </nav>
                    <div id="profile">
                        <img src={casa} alt="Imagem Perfil" />
                        <TiArrowSortedDown className='options' onClick={() => setOptions(!options)} />
                        {options &&
                            <div className="exitProfile" >
                                <div className='two'>
                                    <FiEdit />
                                    <p>Minha conta</p>
                                </div>
                                <div className='two'>
                                    <MdOutlineExitToApp />
                                    <p>Sair</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </Container >
    )
}

export default Header;