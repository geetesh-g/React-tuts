import { applyMiddleware, compose, legacy_createStore } from "redux";
import { reducer as todoReducer } from "./Todo/reducer";
const myMiddleWare = (store) => (dispatch) => (action) => {
	console.log(store);
	console.log(dispatch);
	console.log(action);

	if (typeof action === "function") {
		return action(dispatch);
	}

	return dispatch(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(myMiddleWare));
export const store = legacy_createStore(todoReducer, enhancer);
