import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Login from "../Pages/Login";
import Admin from "../Pages/Admin";
import PrivateRoute from "./privateRoute";
import { Box } from "@chakra-ui/react";
import Edit from "../Pages/Edit";
import { Cart } from "../Pages/Cart";

export default function AllRoutes() {
	return (
		<Box pt="64px">
			{" "}
			{/* Adjust this to match the Navbar's height */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Product />} />
				<Route
					path="/admin"
					element={
						<PrivateRoute>
							<Admin />
						</PrivateRoute>
					}
				/>
				<Route path="/cart" element={<Cart />} />
				<Route
					path="/edit/:id"
					element={
						<PrivateRoute>
							<Edit />
						</PrivateRoute>
					}
				/>
				<Route path="/login" element={<Login />} />
			</Routes>
		</Box>
	);
}
