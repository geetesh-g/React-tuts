import * as types from "./actionTypes";

// Actions for Counter

export const addAction = (payload) => {
	return { type: types.ADD, payload };
};

export const reduceAction = (payload) => {
	return { type: types.REDUCE, payload };
};
