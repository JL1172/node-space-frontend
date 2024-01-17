import { ActionPayload } from "../redux-dtos/dtos";
import { SANITY, SANITY_ERROR } from "../action-types/landing-page";
import { sanity_endpoint } from "../../api/sanity";
import { ThunkDispatch } from "redux-thunk";
import { AxiosError, AxiosResponse } from "axios";

export const fetch_endpoint =
  () =>
  async (dispatch: ThunkDispatch<any, any, any>): Promise<void> => {
    try {
      const res: AxiosResponse = await sanity_endpoint();
      dispatch(verify_sanity(res.data));
      console.log(res.data);
    } catch (err: unknown | AxiosError | any) {
      console.log(err.message);
      dispatch(verify_sanity_error(err));
    }
  };

const verify_sanity = (data: string): ActionPayload => {
  return { type: SANITY, payload: data };
};

const verify_sanity_error = (data: any): ActionPayload => {
  return { type: SANITY_ERROR, payload: data };
};
