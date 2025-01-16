import {
	applyMiddleware,
	combineReducers,
	compose,
	legacy_createStore,
} from "redux";
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as productReducer } from "./productReducer/reducer";

const myMiddleWare = (store) => (next) => (action) => {
	if (typeof action === "function") {
		// If action is a function, execute it with `dispatch` and `getState`
		// console.log("dispatch :", store.dispatch, "data :", store.getState);
		return action(store.dispatch, store.getState);
	}
	// Pass other actions to the next middleware/reducer
	return next(action);
};
const rootReducer = combineReducers({
	authReducer,
	productReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(myMiddleWare));
export const store = legacy_createStore(rootReducer, enhancer);
