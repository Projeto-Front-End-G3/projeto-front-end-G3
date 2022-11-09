import * as yup from "yup";

const cep = /^[0-9]{5}-[0-9]{3}$/;

export const signUpFormSchema = yup.object().shape({
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
    .url("Coloque um link válido"),
  description: yup.string().required("Campo obrigatório"),
  cep: yup
    .string()
    .matches(cep, "Coloque um CEP válido")
    .required("Campo obrigatório"),
  link: yup
    .string()
    .required("Campo obrigatório")
    .url("Coloque um link válido"),
});
