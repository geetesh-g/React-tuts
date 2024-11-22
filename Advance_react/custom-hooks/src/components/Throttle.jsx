import { Box, Button, Heading } from "@chakra-ui/react";
import { useRef } from "react";
import { useThrottle } from "../hooks/Throttle";

export const Throttle = () => {
	const handleClick = () => {
		console.log("Network request success");
	};

	const throttle = useThrottle(handleClick, 1500);

	return (
		<Box>
			{" "}
			<Heading>Throttling</Heading>
			<Button onClick={throttle}>Click me</Button>
		</Box>
	);
};
