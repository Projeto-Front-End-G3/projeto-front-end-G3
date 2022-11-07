import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StyledContainer, StyledMain } from './style';
import contato from '../../../assets/contato.svg';

interface iForm {
  name: string;
  email: string;
  contact: string;
}

const schema = yup.object({
  name: yup.string().required('Seu nome é obrigatório'),
  email: yup
    .string()
    .email('Deve ser um e-mail válido')
    .required('Seu e-mail é obrigatório'),
  contact: yup.string().required('Sua dúvida é obrigatória'),
});

const Main = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iForm>({
    resolver: yupResolver(schema),
  });
  return (
    <StyledMain>
      <figure>
        <img src={contato} alt='Contato' />
      </figure>
      <StyledContainer>
        <h1>Como podemos te ajudar? :)</h1>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <label htmlFor='name'>Nome</label>
          <input
            id='name'
            type='text'
            placeholder='Digite seu nome'
            {...register('name')}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='text'
            placeholder='Digite seu email'
            {...register('email')}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <label htmlFor='contact'>Mensagem</label>
          <textarea
            id='contact'
            placeholder='Digite aqui a sua duvida'
            {...register('contact')}
          />
          {errors.contact && <span>{errors.contact.message}</span>}
          <p>Sua duvida será respondida em breve!</p>
          <button type='submit'>Enviar</button>
        </form>
      </StyledContainer>
    </StyledMain>
  );
};

export default Main;
