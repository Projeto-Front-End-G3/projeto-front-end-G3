import {
  ButtonBack,
  ButtonCadastrar,
  ButtonEntrar,
  ButtonsDiv,
  CompanyDescription,
  Contain,
  ContainDesktop,
  Description,
  HeaderLogin,
  LoginForm,
  LoginText,
  LogoCompany,
} from "./style";
import Logo from "../../assets/logo.png";
import { iLogin, UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import { loginFormSchema } from "../../validations/login";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>({ resolver: yupResolver(loginFormSchema) });

  const { loginUser } = useContext(UserContext);

  return (
    <Contain>
      <CompanyDescription>
        <LogoCompany src={Logo} />
        <Description>Disclosure</Description>
        <Description>Divulgação nunca é demais!</Description>
      </CompanyDescription>
      <ContainDesktop>
        <HeaderLogin>
          <LoginText>Login</LoginText>
          <ButtonBack to={"/"}>Voltar</ButtonBack>
        </HeaderLogin>
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
          <ButtonsDiv>
            <ButtonEntrar type="submit">Entrar</ButtonEntrar>
            <ButtonCadastrar to={"/register"}>Cadastrar</ButtonCadastrar>
          </ButtonsDiv>
        </LoginForm>
      </ContainDesktop>
    </Contain>
  );
};

export default LoginPage;
