import { Box, Center } from "@chakra-ui/react";
import React from "react";

export const CenterExapmle = () => {
	return (
		<Center h={"100px"} w={"200px"} bg={"tomato"} m={"auto"} mt={10}>
			<Box>This is a centered box</Box>
		</Center>
	);
};
