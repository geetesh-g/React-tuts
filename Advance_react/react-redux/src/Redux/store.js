import { legacy_createStore, combineReducers } from "redux";
import { reducer as CountReducer } from "./Counter/reducer";
import { reducer as TodosReducer } from "./Todos/reducer";
import { reducer as AuthReducer } from "./Auth/reducer";
const rootReducer = combineReducers({
	CountReducer,
	TodosReducer,
	AuthReducer,
});

export const store = legacy_createStore(rootReducer);
