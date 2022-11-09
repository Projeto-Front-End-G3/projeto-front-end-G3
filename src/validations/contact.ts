import * as yup from "yup";

export const contactFormSchema = yup.object({
  name: yup.string().required("Seu nome é obrigatório"),
  email: yup
    .string()
    .email("Deve ser um e-mail válido")
    .required("Seu e-mail é obrigatório"),
  contact: yup.string().required("Sua dúvida é obrigatória"),
});
