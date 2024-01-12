import axios from "axios";
const BASE_URL: string = "https://auth-microservice-e6gj.onrender.com";

export const sanity_endpoint = () => {
  return axios.get(BASE_URL);
};