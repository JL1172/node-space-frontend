import { useState } from "react";
import { BlogFormState, BlogFormType } from "../../../../global-dto/g-dtos";

export const initialState: BlogFormType = {
  blog_title: "",
  blog_author_name: "",
  blog_category: "",
  sub_categories: [],
  sub_search: '',
  blog_intro: "",
  blog_body: "",
  blog_outro: "",
  blog_summary: "",
  files: [],
};
//TODO THIS WHOLE PAGE
export const useForm = (
  key: string,
  state: BlogFormType,
  blogState: BlogFormState
) => {
  const [formData, setFormData] = useState(state);
  const changeHandler = (
    name: string | symbol,
    value: string | Record<any, any>
  ) => {
    if (name === "sub_categories") {
      console.log(value);
      //TODO
    } else {
    setFormData({ ...formData, [name]: value });
    }
  };
  return [formData, changeHandler];
};
