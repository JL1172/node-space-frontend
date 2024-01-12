import { combineReducers } from "redux";
import { sanity } from "./landing-page";

export const rootReducer = combineReducers({
    sanity
})

export type RootState = ReturnType<typeof rootReducer>