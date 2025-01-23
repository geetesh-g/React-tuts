import {
	Card,
	CardBody,
	CardFooter,
	Image,
	Stack,
	Heading,
	Text,
	Button,
	ButtonGroup,
	Divider,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
import { addToCart } from "../Redux/cartReducer/action";
import { useDispatch } from "react-redux";

export const ProductCard = (item) => {
	const { image, price, title, brand, id } = item;
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<Card
			maxW="sm"
			border="1px solid"
			borderColor="gray.300"
			boxShadow="sm"
			_hover={{ boxShadow: "lg", transform: "scale(1.02)", transition: "0.2s" }}
		>
			<CardBody p={2}>
				<Image
					src={image}
					alt={title}
					borderRadius="md"
					maxW="150px"
					h="150px"
					objectFit="contain"
					mx="auto"
				/>
				<Divider height={"2px"} borderColor={"#ccc"} mt={2} />
				<Stack mt="4" spacing="2">
					<Heading size="sm" color="gray.700" isTruncated>
						{title}
					</Heading>
					<Text color="gray.500" fontSize="sm">
						{brand}
					</Text>
					<Text color="blue.600" fontSize="lg" fontWeight="bold">
						Rs {price}
					</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter>
				<ButtonGroup spacing="2" w="full" justifyContent="center">
					<Button
						variant="solid"
						colorScheme="blue"
						size="sm"
						_hover={{ bg: "blue.500" }}
					>
						Buy Now
					</Button>
					<Button
						variant="outline"
						colorScheme="blue"
						size="sm"
						_hover={{ bg: "blue.50" }}
						onClick={() => {
							dispatch(addToCart(item));
						}}
					>
						Add to Cart
					</Button>
					{/* <Button
						variant="outline"
						colorScheme="blue"
						size="sm"
						_hover={{ bg: "blue.50" }}
						onClick={() => {
							navigate(`/edit/${id}`);
						}}
					>
						Edit
					</Button> */}
				</ButtonGroup>
			</CardFooter>
		</Card>
	);
};
