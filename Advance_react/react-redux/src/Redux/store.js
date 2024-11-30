import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

const initState = {
	counter: 0,
	todos: [],
};

export const store = legacy_createStore(reducer, initState);
