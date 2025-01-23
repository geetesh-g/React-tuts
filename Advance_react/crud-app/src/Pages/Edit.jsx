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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { patchProduct } from "../utils/patchProduct";

export default function Edit() {
	// Initialize product state with default properties
	const [product, setProduct] = useState({
		image: "",
		title: "",
		price: "",
		discount: "",
		brand: "",
		category: "",
	});
	const { id } = useParams();
	const products = useSelector((store) => store.productReducer.products);
	const dispatch = useDispatch();

	useEffect(() => {
		const data = products.find((el) => el.id === +id);
		if (data) {
			// Prevent mutation of the original product object
			setProduct({ ...data });
		} else {
			console.error("Product not found.");
		}
	}, [id, products]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (product) {
			patchProduct(id, product).then((res) => {
				// Optional: Handle success or update local state if needed
				console.log("Product updated successfully:", res);
			});
		}
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
				Edit Product
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
							value={product.image}
							onChange={(e) =>
								setProduct({ ...product, image: e.target.value })
							}
							focusBorderColor="blue.500"
							bg="gray.50"
						/>
					</FormControl>

					{/* Product Title */}
					<FormControl isRequired>
						<FormLabel>Product Title</FormLabel>
						<Input
							type="text"
							value={product.title}
							onChange={(e) =>
								setProduct({ ...product, title: e.target.value })
							}
							focusBorderColor="blue.500"
							bg="gray.50"
						/>
					</FormControl>

					{/* Price */}
					<FormControl isRequired>
						<FormLabel>Price (in $)</FormLabel>
						<Input
							type="number"
							value={product.price}
							onChange={(e) =>
								setProduct({ ...product, price: e.target.value })
							}
							focusBorderColor="blue.500"
							bg="gray.50"
						/>
					</FormControl>

					{/* Discount */}
					<FormControl isRequired>
						<FormLabel>Discount (in %)</FormLabel>
						<Input
							type="text"
							value={product.discount}
							onChange={(e) =>
								setProduct({ ...product, discount: e.target.value })
							}
							focusBorderColor="blue.500"
							bg="gray.50"
						/>
					</FormControl>

					{/* Brand */}
					<FormControl>
						<FormLabel>Brand</FormLabel>
						<Input
							type="text"
							value={product.brand}
							onChange={(e) =>
								setProduct({ ...product, brand: e.target.value })
							}
							focusBorderColor="blue.500"
							bg="gray.50"
						/>
					</FormControl>

					{/* Category */}
					<FormControl isRequired>
						<FormLabel>Category</FormLabel>
						<Select
							placeholder="Select category"
							focusBorderColor="blue.500"
							value={product.category}
							onChange={(e) =>
								setProduct({ ...product, category: e.target.value })
							}
							bg="gray.50"
						>
							<option value="men">Men</option>
							<option value="women">Women</option>
							<option value="kids">Kids</option>
						</Select>
					</FormControl>

					{/* Submit Button */}
					<Button
						type="submit"
						colorScheme="blue"
						size="lg"
						width="full"
						disabled={
							JSON.stringify(products.find((el) => el.id === +id)) ===
							JSON.stringify(product)
						}
					>
						Edit Product
					</Button>
				</VStack>
			</form>
		</Box>
	);
}
