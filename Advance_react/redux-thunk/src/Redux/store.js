import { legacy_createStore } from "redux";
import { reducer as todoReducer } from "./Todo/reducer";

export const store = legacy_createStore(todoReducer);
