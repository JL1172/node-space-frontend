import axios, { AxiosInstance, AxiosResponse } from "axios";
import { API_KEY, AUTH_BASE_URL } from "../utilities/api-utils";

const axiosInstance: AxiosInstance = axios.create({
  headers: { "api-key": API_KEY, Authorization: "" },
});

export const registerEndpoint = (
  payload: any
): Promise<AxiosResponse<any, any>> => {
  return axiosInstance.post(`${AUTH_BASE_URL}/api/auth/register`, payload);
};

export const loginEndpoint = (payload: {
  username: string;
  password: string;
}): Promise<AxiosResponse<any, any>> => {
  return axiosInstance.post(`${AUTH_BASE_URL}/api/auth/login`, payload);
};

export const authorizeEndpoint = (): Promise<AxiosResponse<any, any>> | any => {
  const token = window.localStorage.getItem("token");
  axiosInstance.defaults.headers["Authorization"] = token || "";
  return axiosInstance.get(`${AUTH_BASE_URL}/api/auth/restricted-check`);
};

export const logoutEndpoint = (): Promise<AxiosResponse<any, any>> => {
  const token = window.localStorage.getItem("token");
  axiosInstance.defaults.headers["Authorization"] = token || "";
  return axiosInstance.get(`${AUTH_BASE_URL}/api/auth/logout`);
};
