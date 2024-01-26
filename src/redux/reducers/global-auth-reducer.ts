import { GlobalAuthType } from "../../global-dto/g-dtos";
import {
  SET_AUTH_STATE,
  SET_JWT_ERROR,
  SET_LOADING_STATE,
} from "../action-types/global-auth-types";

const initialState: GlobalAuthType = {
  jwt_error: "",
  loading_state: false,
  authentication_state: '',
};

export const globalAuthReducer = (
  state = initialState,
  action: Record<string, any>
) => {
  switch (action.type) {
    case SET_JWT_ERROR:
      return { ...state, jwt_error: action.payload };
    case SET_LOADING_STATE:
      return { ...state, loading_state: action.payload };
    case SET_AUTH_STATE:
      return { ...state, authentication_state: action.payload };
    default:
      return state;
  }
};
