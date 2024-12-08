import {
	LOGIN_USER_FAILURE,
	LOGIN_USER_REQUEST,
	LOGIN_USER_SUCCESS,
} from "./actionTypes";

export const loginRequestAction = () => {
	return { type: LOGIN_USER_REQUEST };
};

export const loginSuccessAction = (payload) => {
	return { type: LOGIN_USER_SUCCESS, payload };
};
export const loginFailureAction = () => {
	return { type: LOGIN_USER_FAILURE };
};
