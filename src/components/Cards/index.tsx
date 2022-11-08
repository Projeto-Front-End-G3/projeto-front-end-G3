import { useContext } from "react";

import { CardList } from "./styled";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";

const Cards = () => {
  const { announcements, filter } = useContext(AnnouncementContext);

  return (
    <CardList>
      {filter
        ? announcements
            .filter(
              (announcement) =>
                announcement["type"] == filter ||
                announcement["user"]["name"].toLocaleLowerCase() == filter
            )
            .map((announcement, index) => (
              <li key={index} className="cardContainer">
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
        : announcements.map((announcement, index) => (
            <li key={index} className="cardContainer">
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
          ))}
    </CardList>
  );
};

export default Cards;
