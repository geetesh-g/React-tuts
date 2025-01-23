import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Heading,
	Image,
	Text,
} from "@chakra-ui/react";
import React from "react";

export function CartItem(item) {
	console.log(item);
	const { title, image, brand } = item;
	return (
		<Card>
			<CardBody>
				<Image src={image} alt={`${image}'s image`} />
				<Heading size={"sm"}>{title}</Heading>
				<Text></Text>
			</CardBody>
			<CardFooter></CardFooter>
		</Card>
	);
}

export default CartItem;
