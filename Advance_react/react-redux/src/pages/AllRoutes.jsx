import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { Auth } from "./Auth";
import { Todo } from "../components/Todo";
import PrivateRoute from "../components/PrivateRoute";

export default function AllRoutes() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Auth />} />
				<Route
					path="/todo"
					element={
						<PrivateRoute>
							<Todo />
						</PrivateRoute>
					}
				/>
			</Routes>
		</div>
	);
}
