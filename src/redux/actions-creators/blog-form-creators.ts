import { getCategories } from "../../api/blog-form-endpoint/blog-endpoint";
import {
  SET_BLOG_FETCH_STATUS,
  SET_CATEGORY_DATA,
  SET_FETCH_CATEGORY_ERROR,
} from "../action-types/blog-form-types";

export const initCategoryFetch = () => (dispatch: any) => {
  getCategories()
    .then((res) => {
      dispatch(setCategoryData(res.data));
    })
    .catch((err) => {
      if (
        err.response.data.message === "API Key Required" ||
        err.response.data.message === "Forbidden." ||
        err.response.data.message.matches(/Too Many Requests/i)
      ) {
        dispatch(setCategoryFetchError(err.response.data.message));
      } else {
        dispatch(setCategoryFetchError(err.response.data.message.error[1]));
      }
    })
    .finally(() => {
      setTimeout(() => {
        dispatch(setCategoryFetchError(""));
      }, 5000);
    });
};

export const setCategoryFetchError = (err: any) => {
  return { type: SET_FETCH_CATEGORY_ERROR, payload: err };
};

export const setCategoryData = (data: any) => {
  return { type: SET_CATEGORY_DATA, payload: data };
};

//!these are for first blog submission
export const set_blog_fetch_status = (bool: boolean) => {
  return { type: SET_BLOG_FETCH_STATUS, payload: bool };
};
