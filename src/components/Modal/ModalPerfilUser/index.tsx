import { MouseEventHandler, useState } from "react";
import HomeModalStyled from "./styled";
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
    link: yup.string().url().default(""),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });


  return (

    editProfile ? (
      <HomeModalStyled>
        <section>
          {/* <img src={}>/>*/}
          <button>
            <img className="editBtn" src={lapis}>
              <input type="file" />
            </img>
          </button>

          <span>{ }</span>
        </section>
        <section className="sectionForm">
          <h2>Editando perfil</h2>
          <form onSubmit={handleSubmit()}>
            <label className="label">Novo nome:</label>
            <input
              type="text"
              className="inputPlaceHolder"
              placeholder="Digite seu novo nome!"
              {...register("name")}
            />
            <label>Nova descrição:</label>
            <input
              type="text"
              placeholder="Digite sua nova descrição!"
              {...register("description")}
            />
            <label>Novo link para saiba mais:</label>
            <input
              type="text"
              placeholder="Digite seu novo link de saiba mais!"
              {...register("link")}
            />
            <button type="submit">Salvar</button>
          </form>
        </section>
      </HomeModalStyled >
    ) : (
      <HomeModalStyled >
        <section className="blueSide">
          {/* <img src={}>/>*/}
          <span className="textDescription">{ }</span>
        </section>
        <section>
          <div>
            <h1>Olá { }!</h1>
            <button
              type="button"
              className="returnBtn"
            >
              Voltar
            </button>
          </div>
          <button onClick={() => setEditProfile(true)}>
            Editar perfil
          </button>
          <div>
            <h2>Seus posts</h2>
          </div>
        </section>
      </HomeModalStyled>
    )
  )
}




export default ModalHomePage;
