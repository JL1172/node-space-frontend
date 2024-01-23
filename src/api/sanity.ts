import axios from "axios";
import { BASE_URL } from "../utilities/api-utils";

export const sanity_endpoint = () => {
  return axios.get(BASE_URL);
};