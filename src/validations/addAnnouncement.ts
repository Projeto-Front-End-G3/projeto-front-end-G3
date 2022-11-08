import * as yup from "yup";

export const addAnnouncementFormSchema = yup.object().shape({
  body: yup
    .string()
    .min(6, "No minimo 6 caracteres")
    .max(300, "Máximo de 300 caracteres")
    .required(),
  type: yup
    .string()
    .required()
    .oneOf(["imoveis", "financas", "auto-pecas", "servicos"]),
});
