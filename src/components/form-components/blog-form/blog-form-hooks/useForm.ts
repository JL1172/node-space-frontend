import { useState } from "react";
import { BlogFormType } from "../../../../global-dto/g-dtos";

export const initialState: BlogFormType = {
  blog_title: "",
  author_name: "",
  blog_category: "",
  keywords: [],
  intro: "",
  body: "",
  outro: "",
  summary: "",
  featuredMedia: "",
  extraMedia: [],
};

export const useForm = (key: string, state: BlogFormType) => {
  const [formData, setFormData] = useState(state);
  const changeHandler = (
    name: string | symbol,
    value: string | Record<any, any>
  ) => {
    setFormData({ ...formData, [name]: value });
  };
  return [formData,changeHandler];
};
