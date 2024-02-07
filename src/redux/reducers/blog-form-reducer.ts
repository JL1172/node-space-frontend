import {
  SET_BLOG_FETCH_STATUS,
  SET_CATEGORY_DATA,
  SET_FETCH_CATEGORY_ERROR,
} from "../action-types/blog-form-types";

const initialState = {
  category_fetch_err: "",
  categories: [],
  blog_fetch_status: false,
};

export const blogFormReducer = (
  state = initialState,
  action: Record<string, any>
) => {
  switch (action.type) {
    case SET_FETCH_CATEGORY_ERROR:
      return { ...state, category_fetch_err: action.payload };
    case SET_CATEGORY_DATA:
      return { ...state, categories: action.payload };
    case SET_BLOG_FETCH_STATUS:
      return { ...state, blog_fetch_status: action.payload };
    default:
      return state;
  }
};
