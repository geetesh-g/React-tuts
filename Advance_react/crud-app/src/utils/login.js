import axios from "axios";
import {
	loginFailure,
	loginRequest,
	loginSuccess,
} from "../Redux/authReducer/action";

export const login = (data) => (dispatch) => {
	dispatch(loginRequest());
	axios
		.post("https://reqres.in/api/login", data)
		.then((res) => {
			dispatch(loginSuccess(res.data.token));
		})
		.catch((err) => {
			dispatch(loginFailure());
		});
};
