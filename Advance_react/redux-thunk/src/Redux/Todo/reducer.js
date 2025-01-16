import {
	GET_TODO_SUCCESS,
	POST_TODO_SUCCESS,
	TODO_FAILURE,
	TODO_REQUEST,
} from "./actionTypes";

const initState = {
	todos: [],
	isLoading: false,
	isErr: false,
};

export const reducer = (state = initState, { type, payload }) => {
	switch (type) {
		case TODO_REQUEST:
			return { ...state, isLoading: true };
		case TODO_FAILURE:
			return { ...state, isLoading: false, isErr: true };
		case GET_TODO_SUCCESS:
			return { ...state, isLoading: false, todos: payload };
		case POST_TODO_SUCCESS:
			return { ...state, isLoading: false };
		default:
			return { ...state };
	}
};
