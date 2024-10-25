import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import User from "../pages/User";
import SingleUserPage from "../pages/SingleUserPage";

const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/users" element={<User />} />
			<Route path="users/:user_id" element={<SingleUserPage />} />
		</Routes>
	);
};
export default AllRoutes;
