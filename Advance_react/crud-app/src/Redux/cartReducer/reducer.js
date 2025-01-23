import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "./actionTypes";

const initState = {
	cartCount: 0,
	cartItem: [],
};

export const reducer = (state = initState, action) => {
	// console.log(action.payload);
	switch (action.type) {
		case ADD_TO_CART:
			return {
				...state,
				cartItem: [...state.cartItem, action.payload],
				cartCount: state.cartCount + 1,
			};
		case REMOVE_FROM_CART:
			return {
				...state,
				cartItem: state.cartItem.filter((item) => item.id !== action.payload),
				cartCount: state.cartCount - 1,
			};
		case CLEAR_CART:
			return {
				...state,
				cartItem: [],
				cartCount: 0,
			};
		default:
			return state;
	}
};
