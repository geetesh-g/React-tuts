// Actions for Todos

import {
	FAILURE_TODO,
	GET_SUCCESS_TODO,
	POST_SUCCESS_TODO,
	REQUEST_TODO,
} from "./actionTypes";

export const requestAction = () => {
	return { type: REQUEST_TODO };
};

export const failureAction = () => {
	return {
		type: FAILURE_TODO,
	};
};

export const getSuccessAction = (payload) => {
	return { type: GET_SUCCESS_TODO, payload };
};

export const postSuccessAction = (payload) => {
	return { type: POST_SUCCESS_TODO, payload };
};
