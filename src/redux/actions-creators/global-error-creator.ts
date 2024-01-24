import { SET_JWT_ERROR } from "../action-types/global-error-type";

export const setJwtError = (data: string[]) => {
  return { type: SET_JWT_ERROR, payload: data };
};
