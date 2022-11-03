import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StyledContainer, StyledMain } from './style';
import contato from '../../../assets/contato.svg';

interface iForm {
  contato: string;
}

const schema = yup.object({
  contato: yup.string().required('Sua dúvida é obrigatória'),
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
          <label htmlFor='contato'>Contato</label>
          <textarea
            id='contato'
            placeholder='Digite aqui a sua duvida'
            {...register('contato')}
          />
          {errors.contato && <span>{errors.contato.message}</span>}
          <p>Sua duvida será respondida em breve!</p>
          <button type='submit'>Enviar</button>
        </form>
      </StyledContainer>
    </StyledMain>
  );
};

export default Main;
