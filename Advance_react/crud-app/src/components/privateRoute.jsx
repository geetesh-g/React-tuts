import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
	const { auth } = useSelector((store) => store.authReducer);
	console.log(auth, children);
	return auth ? children : <Navigate to="/login" />;
}
