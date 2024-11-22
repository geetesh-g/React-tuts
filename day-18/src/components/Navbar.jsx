import { HStack, Heading, useBreakpoint } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
	const text = useBreakpoint({
		base: {
			size: "BASE",
		},
		sm: {
			size: "SMALL",
		},
		md: {
			size: "MEDIUM",
		},
		lg: {
			size: "LARGE",
		},
		xl: {
			size: "EXTRA LARGE",
		},
	});
	console.log(text);
	return (
		<HStack justify={"space-around"} h={50} border={"1px solid"}>
			<Heading size={"md"}> Screen : {text}</Heading>
			<NavLink to={"/"}>HOME</NavLink>
			<NavLink to={"/product"}>PRODUCTS</NavLink>
			<NavLink>CART</NavLink>
		</HStack>
	);
}

export default Navbar;
