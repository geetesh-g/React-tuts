import { Box, Button, Divider, Heading } from "@chakra-ui/react";
import { useDebounce } from "../hooks/Debounce";

export const Debounce = () => {
	const handleClick = () => {
		console.log("Netwok request success");
	};
	const debounce = useDebounce(handleClick, 2000);
	return (
		<Box
			p={10}
			boxShadow={"md"}
			w={"80%"}
			m={"auto"}
			border={"1px solid #ccc"}
			my={10}
			borderRadius={5}
		>
			<Heading size={{ base: "base", sm: "sm", md: "md", lg: "lg" }}>
				Debounce Concept
			</Heading>
			<Divider mt={2} />
			<Button colorScheme="blue" mt={4} onClick={debounce}>
				Click Me
			</Button>
		</Box>
	);
};
