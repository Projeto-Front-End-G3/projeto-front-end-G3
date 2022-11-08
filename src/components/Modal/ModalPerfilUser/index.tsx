import { MouseEventHandler, useState } from "react";
import { HomeModalStyled, EditModalStyled } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import lapis from "../../../assets/lapis.png";

interface IModal {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onRequestClose: boolean;
}

const ModalHomePage = () => {
  const [editProfile, setEditProfile] = useState(false);

  const formSchema = yup.object().shape({
    name: yup.string().default(""),
    description: yup
      .string()
      .min(6, "No minimo 6 caracteres")
      .max(300, "Máximo de 300 caracteres")
      .default(""),
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
        <button>
          <input type="file" />
        </button>
        <span className="textDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut!
        </span>
      </section>
      <section className="sectionForm">
        <div className="divGreetings">
          <h1>Olá {}!</h1>
          <button type="button" className="returnBtn">
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
          <label className="label">Novo link para saiba mais:</label>
          <input
            type="text"
            placeholder="Digite seu novo link de saiba mais!"
            {...register("link")}
          />
          <button type="submit">Salvar</button>
        </form>
      </section>
    </EditModalStyled>
  ) : (
    <HomeModalStyled>
      <section className="blueSide">
        {/* <img src={}>/>*/}
        <span className="textDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut!
        </span>
      </section>
      <section>
        <div className="divGreetings">
          <h1>Olá {}!</h1>
          <button type="button" className="returnBtn">
            Voltar
          </button>
        </div>
        <button onClick={() => setEditProfile(true)}>Editar perfil</button>
        <div>
          <h2>Seus posts</h2>
        </div>
      </section>
    </HomeModalStyled>
  );
};

export default ModalHomePage;
