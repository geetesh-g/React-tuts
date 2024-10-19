import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function Navbar() {
	const links = [
		{ path: "/", title: "Home" },
		{ path: "/about", title: "About" },
		{ path: "/contact", title: "Contact" },
		{ path: "/users", title: "User" },
	];
	const activeStyle = {
		padding: "6px",
		textDecoration: "none",
		color: "#0066ff",
		backgroundColor: "aliceblue",
		borderRadius: "8px",
		font: "1em sansSerif",
		border: "none",
		cursor: "pointer",
	};

	const defaultStyle = {
		padding: "6px",
		backgroundColor: "#0066ff",
		borderRadius: "8px",
		color: "aliceblue",
		font: "1em sansSerif",
		border: "none",
		cursor: "pointer",
		textDecoration: "none",
	};

	return (
		<div className="navbar">
			{links.map((link) => {
				return (
					<NavLink
						style={({ isActive }) => {
							// console.log(isActive);
							return isActive ? activeStyle : defaultStyle;
						}}
						key={link.path}
						to={link.path}
					>
						{link.title}
					</NavLink>
				);
			})}
		</div>
	);
}

export default Navbar;
