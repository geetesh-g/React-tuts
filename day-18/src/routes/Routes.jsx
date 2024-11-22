import { Routes, Route } from "react-router-dom";
import { Main } from "../Main";
import { ProductPage } from "../components/Product";

export const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/product" element={<ProductPage />} />
		</Routes>
	);
};
