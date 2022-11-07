import { CardList } from './styled'
import { useContext } from 'react'
import { AnnouncementContext } from '../../contexts/AnnouncementContext'

const Cards = () => {

    const { announcement } = useContext(AnnouncementContext)
    return (
        <CardList>
            {announcement.map((elem, index) => (

                <li key={index} className="cardContainer">
                    <div className="nickName">
                        <img src={elem?.user.img} alt="Santander" />
                        <p >{elem?.user.name}</p>
                    </div>
                    <p>{elem?.body}</p>
                    <button >Saiba mais</button>
                </li>
            ))}
        </CardList>
    )
}

export default Cards