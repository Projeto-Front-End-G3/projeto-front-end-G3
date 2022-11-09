import axios from "axios";

const api = axios.create({
  baseURL: "https://projeto-frontend-api.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
