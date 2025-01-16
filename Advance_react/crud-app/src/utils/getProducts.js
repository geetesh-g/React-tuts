import axios from "axios";
import {
	getProductSuccessAction,
	productRequestAction,
} from "../Redux/productReducer/action";
import qs from "qs";
export const getProducts =
	({ params }) =>
	(dispatch) => {
		dispatch(productRequestAction());
		axios
			.get("http://localhost:8080/products", {
				params,
				paramsSerializer: (params) => {
					return qs.stringify(params, { arrayFormat: "repeat" });
				},
			})

			.then((res) => {
				dispatch(getProductSuccessAction(res.data));
			})
			.catch((err) => {
				dispatch(productRequestAction(err));
			});
	};
