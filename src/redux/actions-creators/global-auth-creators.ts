import {
  SET_JWT_ERROR,
  SET_LOADING_STATE,
  SET_AUTH_STATE,
  SET_CREATOR_STATE,
} from "../action-types/global-auth-types";
import { authorizeEndpoint, logoutEndpoint } from "../../api/auth-endpoint";

export const fetchAuthenticationData = () => async (dispatch: any) => {
  dispatch(setLoadingState(true));
  try {
    const res: any = await authorizeEndpoint();
    dispatch(setCreatorState(res.data.payload));
    dispatch(setAuthenticationState(res.data.authorized));
  } catch (err: any) {
    if (err.response.data.message === "API Key Required") {
      dispatch(setJwtError(err.response.data.message));
    } else {
      dispatch(setJwtError(err.response.data.message.error[1]));
    }
    dispatch(setAuthenticationState(err.response.data.message.authorized));
  } finally {
    dispatch(setLoadingState(false));
    setTimeout(() => {
      dispatch(setJwtError(""));
    }, 5000);
  }
};

export const initiateLogout = () => async (dispatch: any) => {
  try {
    await logoutEndpoint();
  } catch (err: any) {
    if (err.response.data.message === "API Key Required") {
      dispatch(setJwtError(err.response.data.message));
    } else {
      dispatch(setJwtError(err.response.data.message.error[1]));
    }
  } finally {
    window.localStorage.clear();
  }
};
const setCreatorState = (data: { username: string; email: string }) => {
  return { type: SET_CREATOR_STATE, payload: data };
};
const setJwtError = (data: string) => {
  //eslint-disable-line
  return { type: SET_JWT_ERROR, payload: data };
};

export const setLoadingState = (bool: boolean) => {
  return { type: SET_LOADING_STATE, payload: bool };
};

const setAuthenticationState = (bool: boolean) => {
  return { type: SET_AUTH_STATE, payload: bool };
};
