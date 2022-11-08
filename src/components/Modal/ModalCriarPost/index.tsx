import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledModalPost } from "./styles";
import { useContext } from "react";
import { AnnouncementContext } from "../../../contexts/AnnouncementContext";

const ModalCriarPost = () => {
  const { addAnnouncement, setOpenClose } = useContext(AnnouncementContext);

  const formSchema = yup.object().shape({
    publicationText: yup
      .string()
      .min(6, "No minimo 6 caracteres")
      .max(300, "Máximo de 300 caracteres")
      .required(),
    announceType: yup
      .string()
      .required()
      .oneOf(["Imóveis", "Finanças", "Autos-peças", "Serviços"]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <StyledModalPost>
      <div className="firstDiv">
        <div className="containerDiv">
          <p className="textGreetings">
            Olá {}! O que você gostaria de postar?
          </p>
          <p className="closeTag" onClick={() => setOpenClose(false)}>
            X
          </p>
        </div>
        {/* <img src={}>/>*/}
      </div>

      <form onSubmit={handleSubmit(addAnnouncement)}>
        <input
          type="text"
          placeholder="Digite a descrição da sua publicação...!"
          {...register("publicationText")}
        />
        <div className="divSelect">
          <label>Qual o tipo do seu anuncio?</label>
          <select {...register("announceType")}>
            <option>Imóveis</option>
            <option>Finanças</option>
            <option>Autos-peças</option>
            <option>Serviços</option>
          </select>
        </div>
        <div className="divButton">
          <button type="submit">Postar</button>
        </div>
      </form>
    </StyledModalPost>
  );
};

export default ModalCriarPost;
