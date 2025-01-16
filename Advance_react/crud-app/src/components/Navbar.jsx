import { HStack, Text, IconButton } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { QuestionIcon } from "@chakra-ui/icons";
import { CartIcon } from "./cartIcon"; // Ensure this is the correct path to your CartIcon component

export default function Navbar() {
	return (
		<HStack
			py={3}
			px={6}
			boxShadow="sm"
			bg="white"
			alignItems="center"
			spacing={6}
			w="100%"
			position="fixed"
			zIndex="sticky" // Using 'sticky' for better layering
		>
			{/* Logo or Brand Name */}
			<Text fontSize="xl" fontWeight="bold" color="blue.600">
				GMart
			</Text>

			{/* Navigation Links */}
			<HStack as="nav" spacing={6} flex={1}>
				{[
					{ label: "Home", path: "/" },
					{ label: "Products", path: "/products" },
					{ label: "Admin", path: "/admin" },
					{ label: "Login", path: "/login" },
				].map((link, index) => (
					<NavLink
						key={index}
						to={link.path}
						style={({ isActive }) => ({
							color: isActive ? "blue.500" : "gray.600",
							fontWeight: isActive ? "bold" : "normal",
							textDecoration: "none",
						})}
					>
						{link.label}
					</NavLink>
				))}
			</HStack>

			{/* Action Icons */}
			<HStack spacing={4}>
				<CartIcon itemCount={0} />
				<IconButton
					icon={<QuestionIcon />}
					aria-label="Help"
					variant="ghost"
					color="gray.600"
					cursor={"help"}
					_hover={{ bg: "blue.50", color: "blue.600" }}
				/>
			</HStack>
		</HStack>
	);
}
