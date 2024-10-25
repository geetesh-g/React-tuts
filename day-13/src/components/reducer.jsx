const reducer = (state, action) => {
	// console.log(state);
	switch (action.type) {
		case "REQUEST PENDING":
			return { ...state, isLoading: true, data: null, userData: null };
		case "REQUEST SUCCESS":
			return { ...state, isLoading: false, data: action.payload };
		case "USER DATA SUCCESS":
			return {
				...state,
				isLoading: false,
				data: null,
				userData: action.userPayload,
			};
		case "REQUEST FAILURE":
			return { ...state, isError: true, isLoading: false };
		default:
			throw new Error("Something Went Wrong");
	}
};
export default reducer;
