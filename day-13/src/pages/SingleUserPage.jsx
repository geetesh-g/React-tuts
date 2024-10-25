import React, { useEffect, useReducer } from "react";
import reducer from "../components/reducer";
import { useParams } from "react-router-dom";

const baseURL = "https://reqres.in/api/users";

const initialState = {
	isLoading: false,
	isError: false,
	userData: null,
};

const getData = async (dispatch, id) => {
	dispatch({ type: "REQUEST PENDING" });
	try {
		const res = await fetch(`${baseURL}/${id}`);
		const data = await res.json();
		dispatch({ type: "USER DATA SUCCESS", userPayload: data });
	} catch (error) {
		dispatch({ type: "REQUEST FAILURE" });
	}
};

function SingleUserPage() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const param = useParams();

	useEffect(() => {
		getData(dispatch, param.user_id);
	}, []);

	console.log(state);

	return (
		<div className="user-div">
			{state.isLoading ? (
				<h1>Loading...</h1>
			) : state.isError ? (
				<h1>Something Went Wrong</h1>
			) : state.userData === null ? (
				<h2>No Information available about the user </h2>
			) : (
				<div className="user-card">
					<img
						src={state?.userData?.data?.avatar}
						alt={`${state?.userData?.data?.first_name}'s image`}
					/>
					<h4>
						{state?.userData?.data?.first_name}{" "}
						{state?.userData?.data?.last_name}
					</h4>
					<hr />
					<p>Email : {state?.userData?.data?.email}</p>
					<p>support : {state?.userData?.support.url}</p>
				</div>
			)}
		</div>
	);
}

export default SingleUserPage;
