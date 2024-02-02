import {
  SET_CATEGORY_DATA,
  SET_FETCH_CATEGORY_ERROR,
} from "../action-types/blog-form-types";

const initialState = {
  category_fetch_err: "",
  categories: [],
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
    default:
      return state;
  }
};
