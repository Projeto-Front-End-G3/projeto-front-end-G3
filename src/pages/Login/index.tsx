import {
  ButtonBack,
  ButtonCadastrar,
  ButtonEntrar,
  ButtonsDiv,
  CompanyDescription,
  Contain,
  ContainDesktop,
  Description,
  FormFields,
  FormFieldsName,
  HeaderLogin,
  LoginForm,
  LoginText,
  LogoCompany,
  MessageError
} from './style'
import Logo from '../../assets/logo.png'
import { iLogin ,UserContext } from '../../contexts/UserContext'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from '../Login/validation'

type Props = {}

const Login = (props: Props) => {

  const {register, handleSubmit, formState: { errors }} = useForm<iLogin>({resolver: yupResolver(schema)})
  
  const {LoginRequest} = useContext(UserContext)

  return (
      <Contain>

        <CompanyDescription>
          <LogoCompany src={Logo}/>
          <Description>Disclosure</Description>
          <Description>Divulgação nunca é demais!</Description>
        </CompanyDescription>

        <ContainDesktop>
            <HeaderLogin>
              <LoginText>Login</LoginText>
              <ButtonBack to={'/'}>Voltar</ButtonBack>
            </HeaderLogin>

            <LoginForm onSubmit={handleSubmit(LoginRequest)}>
              
              <FormFieldsName id='email'>E-mail:</FormFieldsName>
              <FormFields 
                id='email'
                type='email'
                placeholder="Digite seu e-mail"
                {...register('email')}
              />
              <MessageError>{errors.email?.message}</MessageError>

              <FormFieldsName id='password'>Senha:</FormFieldsName>
              <FormFields
                id='password'
                type='password'
                placeholder="Digite sua senha"
                {...register('password')}
              />
              <MessageError>{errors.password?.message}</MessageError>

              <ButtonsDiv>
                <ButtonEntrar type="submit">Entrar</ButtonEntrar>
                <ButtonCadastrar to={'/register'}>Cadastrar</ButtonCadastrar>
              </ButtonsDiv>

            </LoginForm>
        </ContainDesktop>

      </Contain>
  )
}

export default Login
