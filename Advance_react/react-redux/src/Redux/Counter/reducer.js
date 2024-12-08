import { loadData, setData } from "../../utils/localStorage";
import * as types from "./actionTypes";
const initState = {
	count: loadData("count") || 0,
};
export const reducer = (state = initState, { type, payload }) => {
	switch (type) {
		case types.ADD:
			const addCount = state.count + payload;
			setData("count", addCount);
			return { ...state, count: addCount };
		case types.REDUCE:
			const reduceCount = state.count - payload;
			setData("count", reduceCount);
			return { ...state, count: reduceCount };
		default:
			return { ...state };
	}
};
