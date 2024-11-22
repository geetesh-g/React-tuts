import { Box, Heading } from "@chakra-ui/react";
import { useTimer } from "../hooks/Timer";

export const Timer = () => {
	const show = useTimer(5000);
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
			{show && <Heading>This is a Timer </Heading>}
		</Box>
	);
};
