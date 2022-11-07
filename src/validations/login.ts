import * as yup from "yup";

export const loginFormSchema = yup.object({
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  password: yup
    .string()
    .min(8, "Mínimo de 8 dígitos")
    .required("Campo obrigatório"),
});
