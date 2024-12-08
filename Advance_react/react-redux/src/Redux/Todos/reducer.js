import * as types from "./actionTypes";
const initState = {
	todos: [],
	isLoading: false,
	isErr: false,
};
export const reducer = (state = initState, { type, payload }) => {
	switch (type) {
		case types.REQUEST_TODO:
			return { ...state, isLoading: true };
		case types.GET_SUCCESS_TODO:
			return { ...state, isLoading: false, todos: payload };
		case types.POST_SUCCESS_TODO:
			return { ...state, isLoading: false, todos: [...state.todos, payload] };
		case types.FAILURE_TODO:
			return { ...state, isLoading: false, isErr: true };
		default:
			return { ...state };
	}
};
