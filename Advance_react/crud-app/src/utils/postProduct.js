import axios from "axios";
import {
	addProductSuccessAction,
	productFailureAction,
	productRequestAction,
} from "../Redux/productReducer/action";

export const postProduct = (product) => (dispatch) => {
	dispatch(productRequestAction());
	axios
		.post("http://localhost:8080/products", product)
		.then((res) => {
			dispatch(addProductSuccessAction());
		})
		.catch((err) => {
			dispatch(productFailureAction());
		});
};
