import React from "react";
import { Box, Icon, Text } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

export const CartIcon = ({ itemCount = 0 }) => {
	return (
		<Box position="relative" display="inline-block">
			{/* Cart Icon */}
			<Icon
				as={FaShoppingCart}
				boxSize={6}
				color="gray.700"
				cursor={"pointer"}
			/>

			{/* Badge */}
			{itemCount > 0 && (
				<Box
					position="absolute"
					top="-1"
					right="-1"
					bg="red.500"
					color="white"
					fontSize="xs"
					fontWeight="bold"
					borderRadius="full"
					width="20px"
					height="20px"
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					{itemCount}
				</Box>
			)}
		</Box>
	);
};
