import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers({
  count: countReducer,
  todo: todoReducer,
});
