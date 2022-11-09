import * as yup from "yup";

export const editUserInfoFormSchema = yup.object().shape({
  name: yup.string(),
  description: yup.string(),
  profilePicture: yup.string().url("Coloque um link válido"),
  link: yup.string().url("Coloque um link válido"),
});
