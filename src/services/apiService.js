import axios from "axios";

const BASE_URL = "http://localhost:8080";
const BASE_API = "/api";

export const save = (values) =>
  axios.post(`${BASE_URL}${BASE_API}/`, {
    values,
  });

export const get = (uuid) => axios.get(`${BASE_URL}${BASE_API}/${uuid}/edit`);
