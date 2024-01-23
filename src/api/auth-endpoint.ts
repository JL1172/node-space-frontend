import axios from "axios";
import { API_KEY, AUTH_BASE_URL } from "../utilities/api-utils";

export const registerEndpoint = (payload: any) => {
  return axios
    .create({ headers: { "api-key": API_KEY } })
    .post(`${AUTH_BASE_URL}/api/auth/register`, payload);
};

export const loginEndpoint = (payload: {
  username: string;
  password: string;
}) => {
  return axios
    .create({ headers: { "api-key": API_KEY } })
    .post(`${AUTH_BASE_URL}/api/auth/login`, payload);
};
