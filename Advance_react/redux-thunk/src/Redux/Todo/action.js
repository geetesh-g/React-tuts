import {
	GET_TODO_SUCCESS,
	POST_TODO_SUCCESS,
	TODO_FAILURE,
	TODO_REQUEST,
} from "./actionTypes";

export const requestAction = () => {
	return { type: TODO_REQUEST };
};
export const failureAction = () => {
	return { type: TODO_FAILURE };
};
export const getSuccessAction = (payload) => {
	return { type: GET_TODO_SUCCESS, payload };
};
export const postSuccessAction = (payload) => {
	return { type: POST_TODO_SUCCESS, payload };
};
