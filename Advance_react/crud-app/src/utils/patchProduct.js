import axios from "axios";
import {
	productFailureAction,
	productRequestAction,
} from "../Redux/productReducer/action";

export const patchProduct = (id, data) => (dispatch) => {
	dispatch(productRequestAction());

	return axios
		.patch(`http://localhost:8080/products/${id}`, data)
		.then((res) => {
			dispatch();
		})
		.catch((err) => {
			dispatch(productFailureAction());
		});
};
