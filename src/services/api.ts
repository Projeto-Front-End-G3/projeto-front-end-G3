import axios from "axios";

const api = axios.create({
  baseURL: "https://projeto-frontend-api.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const viaCep = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
  headers: {
    "Content-Type": "application/json"
  }
})
export default api;
