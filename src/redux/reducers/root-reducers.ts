import { combineReducers } from "redux";
import { globalAuthReducer } from "./global-auth-reducer";

export const rootReducer = combineReducers({
  globalAuth: globalAuthReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
