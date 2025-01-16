import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Select,
	VStack,
	Divider,
	useToast,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { postProduct } from "../utils/postProduct";

const initState = {
	image: "",
	title: "",
	price: "",
	brand: "",
	discount: "",
	category: "",
};

export default function Admin() {
	const [product, setProduct] = React.useState(initState);
	const dispatch = useDispatch();
	const toast = useToast();

	const handleChange = (e) => {
		const { value, name } = e.target;
		setProduct({ ...product, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			!product.image ||
			!product.title ||
			!product.price ||
			!product.category
		) {
			toast({
				title: "Error",
				description: "Please fill in all required fields.",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
			return;
		}

		dispatch(postProduct(product));
		setProduct(initState);

		toast({
			title: "Success",
			description: "Product added successfully!",
			status: "success",
			duration: 3000,
			isClosable: true,
		});
	};

	return (
		<Box
			w={{ base: "90%", sm: "70%", md: "50%", lg: "40%" }}
			m="auto"
			mt={12}
			p={8}
			boxShadow="lg"
			borderRadius="lg"
			bg="white"
		>
			{/* Header */}
			<Heading as="h1" mb={6} textAlign="center" color="blue.600">
				Add New Product
			</Heading>
			<Divider mb={6} />

			{/* Form */}
			<form onSubmit={handleSubmit}>
				<VStack spacing={6}>
					{/* Image URL */}
					<FormControl isRequired>
						<FormLabel>Product Image URL</FormLabel>
						<Input
							type="text"
							placeholder="Enter image URL"
							name="image"
							value={product.image}
							onChange={handleChange}
							focusBorderColor="blue.500"
							bg="gray.50"
						/>
					</FormControl>

					{/* Product Title */}
					<FormControl isRequired>
						<FormLabel>Product Title</FormLabel>
						<Input
							type="text"
							placeholder="Enter product title"
							name="title"
							value={product.title}
							onChange={handleChange}
							focusBorderColor="blue.500"
							bg="gray.50"
						/>
					</FormControl>

					{/* Price */}
					<FormControl isRequired>
						<FormLabel>Price (in $)</FormLabel>
						<Input
							type="number"
							placeholder="Enter product price"
							name="price"
							value={product.price}
							onChange={handleChange}
							focusBorderColor="blue.500"
							bg="gray.50"
						/>
					</FormControl>

					{/* Brand */}
					<FormControl>
						<FormLabel>Brand</FormLabel>
						<Input
							type="text"
							placeholder="Enter brand name"
							name="brand"
							value={product.brand}
							onChange={handleChange}
							focusBorderColor="blue.500"
							bg="gray.50"
						/>
					</FormControl>

					{/* Discount */}
					<FormControl>
						<FormLabel>Discount (%)</FormLabel>
						<Input
							type="number"
							placeholder="Enter discount percentage"
							name="discount"
							value={product.discount}
							onChange={handleChange}
							focusBorderColor="blue.500"
							bg="gray.50"
						/>
					</FormControl>

					{/* Category */}
					<FormControl isRequired>
						<FormLabel>Category</FormLabel>
						<Select
							placeholder="Select category"
							name="category"
							value={product.category}
							onChange={handleChange}
							focusBorderColor="blue.500"
							bg="gray.50"
						>
							<option value="men">Men</option>
							<option value="women">Women</option>
							<option value="kids">Kids</option>
						</Select>
					</FormControl>

					{/* Submit Button */}
					<Button type="submit" colorScheme="blue" size="lg" width="full">
						Add Product
					</Button>
				</VStack>
			</form>
		</Box>
	);
}
