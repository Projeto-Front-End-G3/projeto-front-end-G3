import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  BackButton,
  SignUpButton,
  LoginButton,
  ButtonContainer,
  CompanyDescription,
  Container,
  Content,
  Description,
  LoginHeader,
  LoginForm,
  LoginText,
  CompanyLogo,
} from "./style";
import Input from "../../components/Input";
import { UserContext } from "../../contexts/UserContext";
import { loginFormSchema } from "../../validations/login";
import Logo from "../../assets/logo.png";

export interface iLoginFormValue {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormValue>({
    resolver: yupResolver(loginFormSchema),
    mode: "onChange",
  });

  return (
    <Container>
      <CompanyDescription>
        <CompanyLogo src={Logo} />
        <Description>Disclosure</Description>
        <Description>Divulgação nunca é demais!</Description>
      </CompanyDescription>
      <Content>
        <LoginHeader>
          <LoginText>Login</LoginText>
          <BackButton to={"/"}>Voltar</BackButton>
        </LoginHeader>
        <LoginForm onSubmit={handleSubmit(loginUser)}>
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
          <ButtonContainer>
            <LoginButton type="submit">Entrar</LoginButton>
            <SignUpButton to={"/register"}>Cadastrar</SignUpButton>
          </ButtonContainer>
        </LoginForm>
      </Content>
    </Container>
  );
};

export default LoginPage;
