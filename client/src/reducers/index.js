// FOR COMBINING REDUCERS
import { combineReducers } from "redux";
import authReducer from "./authReducer";

export const allReducers = combineReducers({
  auth: authReducer,
});

