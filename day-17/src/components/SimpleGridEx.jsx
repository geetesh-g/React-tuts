import { Box, Center, SimpleGrid } from "@chakra-ui/react";

const SimpleGridEx = () => {
	// const items = new Array(12).fill(0);
	// const newItems = items.map((_, i) => i + 1);

	const items = new Array(12).fill(0).map((_, i) => i + 1);
	console.log(items);
	return (
		<SimpleGrid
			columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5, "2xl": 6 }}
			spacing={4}
			m={"auto"}
		>
			{items.map((item) => (
				<Center key={item} h={20} w={20} bg={"tomato"}>
					<Box>{item}</Box>
				</Center>
			))}
		</SimpleGrid>
	);
};
export default SimpleGridEx;
