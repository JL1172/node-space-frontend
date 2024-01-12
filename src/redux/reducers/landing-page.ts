import { SANITY, SANITY_ERROR } from "../action-types/landing-page";
import { ActionPayload, LandingState } from "../dtos/dtos";

const inititalState: LandingState = {
  sanity_message: "",
  sanity_error: "",
};

export const sanity = (
  state = inititalState,
  action: ActionPayload
): LandingState => {
  switch (action.type) {
    case SANITY:
      return { ...state, sanity_message: action.payload };
    case SANITY_ERROR:
      return { ...state, sanity_error: action.payload };
    default:
      return state;
  }
};
