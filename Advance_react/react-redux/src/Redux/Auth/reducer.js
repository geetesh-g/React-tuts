import {
	LOGIN_USER_FAILURE,
	LOGIN_USER_REQUEST,
	LOGIN_USER_SUCCESS,
} from "./actionTypes";

const initState = {
	auth: false,
	token: "",
	isLoading: false,
	isErr: false,
};

export const reducer = (state = initState, { type, payload }) => {
	switch (type) {
		case LOGIN_USER_REQUEST:
			return { ...state, isLoading: true };
		case LOGIN_USER_SUCCESS:
			return { ...state, isLoading: false, auth: true, token: payload };
		case LOGIN_USER_FAILURE:
			return { ...state, isLoading: false, isErr: true };
		default:
			return { ...state };
	}
};
