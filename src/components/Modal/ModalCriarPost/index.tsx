import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledModalPost } from "./styles";
import { useContext } from "react";
import { AnnouncementContext } from "../../../contexts/AnnouncementContext";
import { UserContext } from "../../../contexts/UserContext";

const ModalCriarPost = () => {
  const { addAnnouncement, setOpenClose } = useContext(AnnouncementContext);
  const { userData } = useContext(UserContext);

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
            Olá {userData?.name}! O que você gostaria de postar?
          </p>
          <p className="closeTag" onClick={() => setOpenClose(false)}>
            X
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(addAnnouncement)}>
        <input
          type="text"
          placeholder="Digite a sua publicação...!"
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
          <button type="submit">Postar</button>
      </form>
    </StyledModalPost>
  );
};

export default ModalCriarPost;
