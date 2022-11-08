import { useContext } from "react";

import { CardList } from "./styled";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";

const Cards = () => {
  const { filterAnnouncements } = useContext(AnnouncementContext);
  const announcements = filterAnnouncements();

  return (
    <CardList>
      {announcements.length == 0 ? (
        <p>Nenhum anúncio encontrado</p>
      ) : (
        announcements.map((announcement) => (
          <li key={announcement.id} className="cardContainer">
            <div className="nickName">
              <img
                src={announcement.user.profilePicture}
                alt={announcement.user.name}
              />
              <p>{announcement.user.name}</p>
            </div>
            <p>{announcement.body}</p>
            <a href={announcement.user.link} target="_blank">
              Saiba mais
            </a>
          </li>
        ))
      )}
    </CardList>
  );
};

export default Cards;
