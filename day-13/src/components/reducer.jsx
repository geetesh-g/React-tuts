const reducer = (state, action) => {
	console.log(state);
	switch (action.type) {
		case "REQUEST PENDING":
			return { ...state, isLoading: true, data: null };
		case "REQUEST SUCCESS":
			return { ...state, isLoading: false, data: action.payload };
		case "REQUEST FAILURE":
			return { ...state, isError: true, isLoading: false };
	}
};
export default reducer;
