import {
	ADD_PRODUCT_SUCCESS,
	GET_PRODUCT_SUCCESS,
	PRODUCT_FAILURE,
	PRODUCT_REQUEST,
} from "./actionTypes";

export const productRequestAction = () => {
	return {
		type: PRODUCT_REQUEST,
	};
};
export const addProductSuccessAction = () => {
	return {
		type: ADD_PRODUCT_SUCCESS,
	};
};
export const productFailureAction = () => {
	return {
		type: PRODUCT_FAILURE,
	};
};
export const getProductSuccessAction = (payload) => {
	return {
		type: GET_PRODUCT_SUCCESS,
		payload,
	};
};
