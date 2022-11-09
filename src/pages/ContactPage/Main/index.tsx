import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { StyledContainer, StyledMain } from "./style";
import { contactFormSchema } from "../../../validations/contact";
import Contact from "../../../assets/contact.svg";

interface iForm {
  name: string;
  email: string;
  contact: string;
}

const Main = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iForm>({
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<iForm> = (data) => {
    console.log(data);
    toast.success("Mensagem enviada com sucesso!");
  };

  return (
    <StyledMain>
      <div>
        <figure>
          <img src={Contact} alt="Contato" />
        </figure>
        <StyledContainer>
          <h1>Como podemos te ajudar? :)</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              placeholder="Digite seu nome"
              {...register("name")}
            />
            {errors.name && <span>{errors.name.message}</span>}
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Digite seu email"
              {...register("email")}
            />
            {errors.email && <span>{errors.email.message}</span>}
            <label htmlFor="contact">Mensagem</label>
            <textarea
              id="contact"
              placeholder="Digite aqui a sua duvida"
              {...register("contact")}
            />
            {errors.contact && <span>{errors.contact.message}</span>}
            <p>Sua duvida será respondida em breve!</p>
            <button type="submit">Enviar</button>
          </form>
        </StyledContainer>
      </div>
    </StyledMain>
  );
};

export default Main;
