import { Box, Button, Divider, Heading } from "@chakra-ui/react";
import { useCounter } from "../hooks/Counter";

export const Counter = () => {
	const [state, setter] = useCounter(0, 1);
	return (
		<Box
			boxShadow={"md"}
			p={10}
			w={{ base: "70%", md: "60%", lg: "40%" }}
			m={"auto"}
			border={"1px solid #ccc"}
			my={20}
			borderRadius={5}
		>
			<Heading>Counter : {state}</Heading>
			<Divider />
			<Button colorScheme="teal" onClick={() => setter()} mt={4}>
				Add
			</Button>
		</Box>
	);
};
