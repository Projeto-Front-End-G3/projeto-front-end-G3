import { MouseEventHandler, useContext, useState } from "react";
import { HomeModalStyled, EditModalStyled } from "./styles";
import { AnnouncementContext } from "../../../contexts/AnnouncementContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../../contexts/UserContext";

interface IModal {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onRequestClose: boolean;
}

const ModalProfile = () => {
  const [editProfile, setEditProfile] = useState(false);
  const { setProfile, announcement, deleteAnnouncement } =
    useContext(AnnouncementContext);
  const { userData } = useContext(UserContext);

  const formSchema = yup.object().shape({
    name: yup.string().default(""),
    description: yup
      .string()
      .min(6, "No minimo 6 caracteres")
      .max(300, "Máximo de 300 caracteres")
      .default(""),
    profileImgLink: yup.string().url("URL não valida"),
    link: yup.string().url("URL não valida").default(""),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return editProfile ? (
    <EditModalStyled>
      <section className="blueSideForm">
        {/* <img src={}>/>*/}
        <span className="textDescription">{userData?.description}</span>
      </section>
      <section className="sectionForm">
        <div className="divGreetings">
          <h1>Olá {userData?.name}!</h1>
          <button
            type="button"
            className="returnBtn"
            onClick={() => setEditProfile(false)}
          >
            Voltar
          </button>
        </div>
        <form /* onSubmit={handleSubmit()} */>
          <h2>Editando perfil</h2>
          <label className="label">Novo nome:</label>
          <input
            type="text"
            className="inputPlaceHolder"
            placeholder="Digite seu novo nome!"
            {...register("name")}
          />
          <label className="label">Nova descrição:</label>
          <input
            type="text"
            placeholder="Digite sua nova descrição!"
            {...register("description")}
          />
          <label className="label">Novo link para imagem de perfil:</label>
          <input
            type="text"
            placeholder="Digite seu novo link imagem de perfil!"
            {...register("profileImgLink")}
          />
          <label className="label">Novo link para saiba mais:</label>
          <input
            type="text"
            placeholder="Digite seu novo link de saiba mais!"
            {...register("link")}
          />
          <div className="divSaveBtn">
            <button className="saveBtn" type="submit">
              Salvar
            </button>
          </div>
        </form>
      </section>
    </EditModalStyled>
  ) : (
    <HomeModalStyled>
      <section className="blueSide">
        <figure>
          <img src={userData?.profilePicture} />
        </figure>
        <span className="textDescription">{userData?.description}</span>
      </section>
      <section className="sectionPosts">
        <div className="divGreetings">
          <div className="divEdit">
            <h1>Olá {userData?.name}!</h1>
            <button onClick={() => setEditProfile(true)}>Editar perfil</button>
          </div>
          <button
            type="button"
            className="returnBtn"
            onClick={() => setProfile(false)}
          >
            Voltar
          </button>
        </div>

        <div className="divContainerPosts">
          <h2>Seus posts</h2>
          <ul className="divPosts">
            {announcement.map((elem, index) => (
              <li key={index}>
                <div>
                  <img src={elem?.user.profilePicture} alt="Santander" />
                  <p>{elem?.user.name}</p>
                </div>
                <p>{elem?.body}</p>
                <div className="buttonDiv">
                  <a href={elem.user.link} target="_blank">
                    Saiba mais
                  </a>
                  <button
                    onClick={() => {
                      deleteAnnouncement(elem.id);
                      setProfile(false);
                    }}
                  >
                    Deletar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </HomeModalStyled>
  );
};

export default ModalProfile;
