import { Box, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CartItem from "../components/cartItem";

export const Cart = () => {
	const { cartItem } = useSelector((store) => store.cartReducer);
	console.log(cartItem);

	return (
		<Box textAlign={"center"}>
			<Heading>Cart</Heading>
			{cartItem?.map((item) => {
				return <CartItem key={item.id} {...item} />;
			})}
		</Box>
	);
};
