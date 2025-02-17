import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const initState = {
	isLoading: false,
	isErr: false,
	auth: false,
	token: "",
};

export const reducer = (state = initState, action) => {
	const { type, payload } = action;
	switch (type) {
		case LOGIN_REQUEST:
			return { ...state, isLoading: true };
		case LOGIN_SUCCESS:
			return { ...state, isLoading: false, auth: true, token: payload };
		case LOGIN_FAILURE:
			return { ...state, isLoading: false, isErr: true };
		default:
			return state;
	}
};
