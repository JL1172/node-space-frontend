import { useState } from "react";
import {
  BlogFormState,
  BlogFormType,
  FinalBlogPayloadType,
} from "../../../../global-dto/g-dtos";
import { addBlogPtOne } from "../../../../api/blog-endpoint";

export const initialState: BlogFormType = {
  blog_title: "",
  blog_author_name: "",
  blog_category: "",
  sub_categories: [],
  read_only_sc: "",
  blog_intro: "",
  blog_body: "",
  blog_outro: "",
  blog_summary: "",
  files: [],
};
export const useForm = (
  key: string,
  state: BlogFormType,
  blogState: BlogFormState,
  set_blog_fetch_status: Function
) => {
  const [formData, setFormData] = useState(state);
  const changeHandler = (name: string | symbol, value: any) => {
    if (name === "sub_categories") {
      setFormData({
        ...formData,
        sub_categories: value,
      });
    } else if (name === "files") {
      setFormData({ ...formData, files: [...formData.files, value] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  //!submission
  const handleSubmission = async (e: Event) => {
    try {
      //prevent default
      e.preventDefault();
      //setting loading page into effect
      set_blog_fetch_status(true);
      //grabbing only sub-category id's
      const subCategoriesFinal = formData.sub_categories.map((n) => n.id);
      console.log(formData.sub_categories)
      //creating payload acceptable to backend
      const payload: FinalBlogPayloadType = {
        blog_title: formData.blog_title,
        blog_intro: formData.blog_intro,
        blog_body: formData.blog_body,
        blog_outro: formData.blog_outro,
        blog_summary: formData.blog_summary,
        blog_author_name: formData.blog_author_name,
        category_id: Number(formData.blog_category),
        sub_categories: subCategoriesFinal || [],
      };
      //grabbing files and appending them to formdata
      const form_data = new FormData();
      for (const file of formData.files) {
        form_data.append("files", file);
      }
      //calling api to add blog
      const res = await addBlogPtOne(payload);
      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      set_blog_fetch_status(false);
    }
  };
  return [formData, changeHandler, handleSubmission];
};
