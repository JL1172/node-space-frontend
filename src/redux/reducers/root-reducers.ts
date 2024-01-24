import { combineReducers } from "redux";
import { globalErrReducer } from "./global-error-reducer";

export const rootReducer = combineReducers({
  globalError: globalErrReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
