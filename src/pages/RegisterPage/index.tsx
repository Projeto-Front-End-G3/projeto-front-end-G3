import { useContext } from "react";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Logo from "../../assets/logo.png";
import Input from "../../components/Input";
import { Container, Content } from "./style";
import { Button } from "../../components/Button";
import { UserContext } from "../../contexts/UserContext";
import { signUpFormSchema } from "../../validations/signUp";

export interface iUserFormValue {
  name: string;
  email: string;
  password: string;
  passwordConfirm?: string;
  profilePicture: string;
  description: string;
  cep: string;
  link: string;
}

const RegisterPage = () => {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<iUserFormValue>({
    resolver: yupResolver(signUpFormSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<iUserFormValue> = (data) => {
    delete data["passwordConfirm"];

    registerUser(data);
  };

  return (
    <Container>
      <Content>
        <div>
          <img src={Logo} alt="" />
          <h1>Disclosure</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2>Cadastro</h2>
            <Link to="/">Voltar</Link>
          </div>
          <Input
            name="name"
            label="Nome"
            placeholder="Digite seu nome"
            type="text"
            register={register}
            error={errors["name"]?.message}
          />
          <Input
            name="email"
            label="Email"
            placeholder="Digite seu email"
            type="text"
            register={register}
            error={errors["email"]?.message}
          />
          <Input
            name="password"
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            register={register}
            error={errors["password"]?.message}
          />
          <Input
            name="passwordConfirm"
            label="Confirmar senha"
            placeholder="Digite novamente sua senha"
            type="password"
            register={register}
            error={errors["passwordConfirm"]?.message}
          />
          <Input
            name="profilePicture"
            label="Foto de perfil"
            placeholder="Adicione uma foto ao seu perfil"
            type="text"
            register={register}
            error={errors["profilePicture"]?.message}
          />
          <Input
            name="description"
            label="Descrição"
            placeholder="Digite sua descrição"
            type="text"
            register={register}
            error={errors["description"]?.message}
          />
          <Input
            name="cep"
            label="CEP"
            placeholder="Digite seu CEP"
            type="text"
            register={register}
            error={errors["cep"]?.message}
          />
          <Input
            name="link"
            label="Link saiba mais"
            placeholder="Coloque o seu link aqui"
            type="text"
            register={register}
            error={errors["link"]?.message}
          />
          <Button type="submit" disabled={!isValid}>
            Cadastrar
          </Button>
        </form>
      </Content>
    </Container>
  );
};

export default RegisterPage;
