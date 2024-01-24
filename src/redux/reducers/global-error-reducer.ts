import { GlobalErrorType } from "../../global-dto/g-dtos";
import { SET_JWT_ERROR } from "../action-types/global-error-type";

const initialState: GlobalErrorType = {
  jwt_error: "",
};

export const globalErrReducer = (
  state = initialState,
  action: Record<string, any>
) => {
  switch (action.type) {
    case SET_JWT_ERROR:
      return { ...state, jwt_error: action.payload };
    default:
      return state;
  }
};
