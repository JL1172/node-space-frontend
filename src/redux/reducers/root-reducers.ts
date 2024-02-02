import { combineReducers } from "redux";
import { globalAuthReducer } from "./global-auth-reducer";
import { blogFormReducer } from "./blog-form-reducer";

export const rootReducer = combineReducers({
  globalAuth: globalAuthReducer,
  blogForm: blogFormReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
