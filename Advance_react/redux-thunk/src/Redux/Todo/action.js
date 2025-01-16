import {
	GET_TODO_SUCCESS,
	POST_TODO_SUCCESS,
	TODO_FAILURE,
	TODO_REQUEST,
} from "./actionTypes";
import axios from "axios";

const url = "http://localhost:8080/todos";

const requestAction = () => {
	return { type: TODO_REQUEST };
};
const failureAction = () => {
	return { type: TODO_FAILURE };
};
const getSuccessAction = (payload) => {
	return { type: GET_TODO_SUCCESS, payload };
};
const postSuccessAction = () => {
	return { type: POST_TODO_SUCCESS };
};

export const getTodos = (dispatch) => {
	dispatch(requestAction());
	axios
		.get(url)
		.then((res) => {
			dispatch(getSuccessAction(res.data));
		})
		.catch((err) => {
			dispatch(failureAction());
		});
};

export const addTodos = (input) => async (dispatch) => {
	dispatch(requestAction());
	await axios
		.post(url, input)
		.then(() => {
			dispatch(postSuccessAction());
		})
		.catch(() => {
			dispatch(failureAction());
		});
};
