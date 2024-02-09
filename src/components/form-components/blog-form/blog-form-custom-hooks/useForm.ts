import { useState } from "react";
import {
  BlogFormState,
  BlogFormType,
  FinalBlogPayloadType,
} from "../../../../global-dto/g-dtos";
import { addBlogPtOne } from "../../../../api/blog-form-endpoint/blog-endpoint";
import { NavigateFunction } from "react-router-dom";

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
  errors: [],
};
export const useForm = (
  key: string,
  state: BlogFormType,
  blogState: BlogFormState,
  set_blog_fetch_status: Function,
  setAuthenticationState: Function,
  setJwtError: Function,
  nav: NavigateFunction,
  advancedLogout: Function,
  setCategoryFetchError: Function
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
  const deleteFileFromSelection = (fileName: string) => {
    const index = formData.files.findIndex((n: any) => n.name === fileName);
    const cp = [...formData.files];
    cp.splice(index, 1);
    setFormData({ ...formData, files: cp });
  };
  //!submission
  const handleSubmission = async (e: Event) => {
    try {
      //prevent default
      e.preventDefault();
      //clearing error cache
      setFormData({ ...formData, errors: [] });
      //setting loading page into effect
      set_blog_fetch_status(true);
      //grabbing only sub-category id's
      const subCategoriesFinal = formData.sub_categories.map((n) => n.id);
      //creating payload acceptable to backend
      const payload: FinalBlogPayloadType = {
        blog_title: formData.blog_title,
        blog_intro: formData.blog_intro,
        blog_body: formData.blog_body,
        blog_outro: formData.blog_outro,
        blog_summary: formData.blog_summary,
        blog_author_name: formData.blog_author_name,
        category_id: formData.blog_category,
        sub_categories: subCategoriesFinal,
      };
      //grabbing files and appending them to formdata
      //all necessary formdata manipulation
      const form_data = new FormData();
      for (const file of formData.files) {
        form_data.append("files", file);
      }
      for (const pay of Object.keys(payload)) {
        if (pay !== "sub_categories") {
          form_data.append(pay, payload[pay]);
        }
      }
      payload.sub_categories.forEach((n: number) => {
        form_data.append("sub_categories", n + "");
      });
      const res = await addBlogPtOne(form_data);
      console.log(res);
    } catch (err: any) {
      if (err.response.data.message === "Forbidden.") {
        await advancedLogout();
        alert(`Error: ${err.response.data.message}`);
      } else if (err.response.data.message === "Too Many Requests") {
        setCategoryFetchError(err.response.data.message);
      } else if (err.response.data.message === "API Key Required") {
        await advancedLogout();
        alert(`Error: ${err.response.data.message}`);
      } else {
        if (Array.isArray(err.response.data.message.error)) {
          window.localStorage.clear();
          nav("/");
          alert(err.response.data.message.error[1]);
        } else if (
          /invalid file type/i.test(err.response.data.message) ||
          (err.response.data.message.message &&
            err.response.data.message.message === "File is required")
        ) {
          const error = /invalid file type/i.test(err.response.data.message)
            ? err.response.data.message
            : err.response.data.message.message === "File is required"
            ? err.response.data.message.message
            : "";
          setFormData({
            ...formData,
            errors: [{ files: error }],
          });
        } else {
          setFormData({ ...formData, errors: err.response.data.message });
        }
      }
      //parse error types
      //nav function if forbidden force rerender of page tbh
      //use advancedlogout??
    } finally {
      set_blog_fetch_status(false);
      setTimeout(async () => {
        setCategoryFetchError("");
      }, 5000);
    }
  };
  return [formData, changeHandler, handleSubmission, deleteFileFromSelection];
};
