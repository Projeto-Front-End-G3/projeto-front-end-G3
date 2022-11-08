import { useContext } from "react";

import { CardList } from "./styled";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";

const Cards = () => {
  const { announcement } = useContext(AnnouncementContext);

  return (
    <CardList>
      {announcement.map((elem, index) => (
        <li key={index} className="cardContainer">
          <div className="nickName">
            <img src={elem?.user.profilePicture} alt="Santander" />
            <p>{elem?.user.name}</p>
          </div>
          <p>{elem?.body}</p>
          <a href={elem.user.link} target="_blank">
            Saiba mais
          </a>
        </li>
      ))}
    </CardList>
  );
};

export default Cards;
