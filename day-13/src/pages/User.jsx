import React, { useEffect, useReducer } from "react";
import reducer from "../components/reducer";
const initialState = { isLoading: false, isError: false, data: null };

const getData = async (dispatch) => {
	dispatch({ type: "REQUEST PENDING" });
	try {
		const res = await fetch("https://reqres.in/api/users");
		const data = await res.json();
		// console.log(data.data);
		dispatch({ type: "REQUEST SUCCESS", payload: data?.data });
	} catch (error) {
		dispatch({ type: "REQUEST FAILURE" });
	}
};

function User() {
	const [state, dispatch] = useReducer(reducer, initialState);
	useEffect(() => {
		getData(dispatch);
	}, []);

	return (
		<div>
			<h1>User Data</h1>
			{state.isLoading ? (
				<h1>Loading...</h1>
			) : state.isError ? (
				<h1>Something Went Wrong</h1>
			) : state.data?.length <= 0 ? (
				<h1>List is empty</h1>
			) : (
				state.data?.map((item) => <h3 key={item.id}>{item.first_name}</h3>)
			)}
		</div>
	);
}

export default User;
