import * as yup from 'yup'

const schema = yup.object({
  email: yup
    .string()
    .email('E-mail deve ser válido!')
    .required('E-mail é um campo obrigatório!'),
  password: yup
    .string()
    .min(5, 'Sua senha deve conter no minimo 5 caractéres!')
    .required('Senha é um campo obrigatório')
})

export default schema