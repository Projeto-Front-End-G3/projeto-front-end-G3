import { useContext } from "react";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Logo from "../../assets/logo.png";
import Input from "../../components/Input";
import { Container, Content } from "./style";
import { Button } from "../../components/Button";
import { UserContext } from "../../contexts/UserContext";

export interface iUserFormValue {
  name: string;
  email: string;
  password: string;
  passwordConfirm?: string;
  profilePicture: string;
  description: string;
  link: string;
}

const URL =
  /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

const RegisterPage = () => {
  const { registerUser } = useContext(UserContext);

  const signUpFormSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
        "A senha deve conter letras, números e ao menos um símbolo"
      ),
    passwordConfirm: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "As senhas não são iguais"),
    profilePicture: yup
      .string()
      .required("Campo obrigatório")
      .matches(URL, "Coloque um link válido"),
    description: yup.string().required("Campo obrigatório"),
    link: yup
      .string()
      .required("Campo obrigatório")
      .matches(URL, "Coloque um link válido"),
  });

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
