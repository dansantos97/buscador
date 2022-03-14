import axios from "axios";
// 26520632/json

const api = axios.create({
  baseURL: "http://viacep.com.br/ws/"
})

export default api;
