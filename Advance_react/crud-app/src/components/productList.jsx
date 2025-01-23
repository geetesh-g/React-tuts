import {
	Box,
	Heading,
	SimpleGrid,
	Center,
	Spinner,
	Text,
	Alert,
	AlertIcon,
} from "@chakra-ui/react";
import { ProductCard } from "./productCard";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../utils/getProducts";
import { useLocation, useSearchParams } from "react-router-dom";

export const ProductList = () => {
	const { products, isLoading, isError } = useSelector(
		(store) => store.productReducer,
		shallowEqual
	);

	const [searchParams] = useSearchParams();
	const location = useLocation();
	const paramObj = {
		params: {
			category: searchParams.getAll("category"),
			_sort: searchParams.get("order") && "price",
			_order: searchParams.get("order"),
		},
	};

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts(paramObj));
	}, [location.search]);

	return (
		<Box
			px={{ base: 6, md: 6 }}
			py={4}
			maxW="1200px"
			max="auto"
			background={"white"}
			m={"auto"}
		>
			{/* Heading */}
			<Heading as="h1" mb={6} textAlign="center" color="blue.600">
				Product List
			</Heading>

			{/* Conditional Rendering */}
			{isLoading && (
				<Center>
					<Spinner size="xl" thickness="4px" speed="0.65s" color="blue.500" />
				</Center>
			)}
			{isError && (
				<Alert status="error" borderRadius="md" mb={6}>
					<AlertIcon />
					Something went wrong! Please try again later.
				</Alert>
			)}
			{!isLoading && !isError && products.length === 0 && (
				<Text fontSize="lg" color="gray.500" textAlign="center">
					No products available.
				</Text>
			)}
			{!isLoading && !isError && products.length > 0 && (
				<SimpleGrid
					columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
					spacing={2}
					justifyItems={"center"}
				>
					{products.map((product) => (
						<ProductCard key={product.id} {...product} />
					))}
				</SimpleGrid>
			)}
		</Box>
	);
};
