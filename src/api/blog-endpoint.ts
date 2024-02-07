import axios, { AxiosInstance } from "axios";
import { API_KEY, AUTH_BASE_URL } from "../utilities/api-utils";
import { FinalBlogPayloadType } from "../global-dto/g-dtos";

const axiosInstance: AxiosInstance = axios.create({
  headers: { "api-key": API_KEY, Authorization: "" },
});

export const getCategories = () => {
  const token = window.localStorage.getItem("token");
  axiosInstance.defaults.headers["Authorization"] = token || "";
  return axiosInstance.get(`${AUTH_BASE_URL}/api/categories`);
};

export const addBlogPtOne = (blog_payload: FinalBlogPayloadType) => {
  const token = window.localStorage.getItem("token");
  axiosInstance.defaults.headers["Authorization"] = token || "";
  return axiosInstance.post(`${AUTH_BASE_URL}/api/create-blog`, blog_payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
