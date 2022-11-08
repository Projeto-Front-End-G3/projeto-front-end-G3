import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AnnouncementContext } from "../../../contexts/AnnouncementContext";
import { UserContext } from "../../../contexts/UserContext";
import { StyledModalPost } from "./styles";
import { addAnnouncementFormSchema } from "../../../validations/addAnnouncement";

export interface iAddAnnouncement {
  body: string;
  type: string;
  userId: number;
}

const ModalCreateAnnouncement = () => {
  const { addAnnouncement, setOpenClose } = useContext(AnnouncementContext);
  const { userData } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iAddAnnouncement>({
    resolver: yupResolver(addAnnouncementFormSchema),
  });

  const onSubmit: SubmitHandler<iAddAnnouncement> = (data) => {
    const id: number = JSON.parse(localStorage.getItem("@Disclosure:userId")!);

    data["userId"] = id;
    addAnnouncement(data);
    setOpenClose(false);
  };

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Digite a sua publicação...!"
          {...register("body")}
        />
        <div className="divSelect">
          <label>Qual o tipo do seu anuncio?</label>
          <select {...register("type")}>
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

export default ModalCreateAnnouncement;
