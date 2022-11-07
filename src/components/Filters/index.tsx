import React from 'react'
import { ContainerFilters } from './styled'
import { MdAddCircleOutline } from 'react-icons/md'
import casa from '../../assets/casa.png'
import moeda from '../../assets/moeda.png'
import carro from '../../assets/carro.png'
import rolo from '../../assets/rolo.png'
import { BiSearchAlt2 } from 'react-icons/bi'
import { GoHome } from 'react-icons/go'
import { BsCoin } from 'react-icons/bs'
import { AiOutlineCar } from 'react-icons/ai'
import { TfiPaintRoller } from 'react-icons/tfi'


const Filters = () => {
    return (
        <ContainerFilters>
            <div className='newAdd'>
                <p>Novo anúncio</p>
                <MdAddCircleOutline />
            </div>

            <div className="filtersCenter">
                <ul>
                    <li>
                        <GoHome />
                        <p>Imóveis</p>
                    </li>
                    <li>
                        <BsCoin />
                        <p>Finanças</p>
                    </li>
                    <li>
                        <AiOutlineCar />
                        <p>Auto-peças</p>
                    </li>
                    <li>
                        <TfiPaintRoller />
                        <p>Serviços</p>
                    </li>
                </ul>
                <div>
                    <input type="text" placeholder='Estou procurando por...' />
                    <BiSearchAlt2 />
                </div>
            </div>
        </ContainerFilters>
    )
}

export default Filters;