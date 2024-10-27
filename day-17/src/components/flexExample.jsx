import { Box, Center, Flex, Spacer } from "@chakra-ui/react";

export const FlexExample = () => {
	return (
		<>
			<Flex>
				<Box>
					<Center h={"50px"} w={"100px"} bg={"cyan"}>
						1
					</Center>
				</Box>
				<Spacer />
				<Box>
					<Center h={"50px"} w={"50px"} bg={"pink"}>
						2
					</Center>
				</Box>
				<Spacer />
				<Box>
					<Center h={"50px"} w={"80px"} bg={"teal"}>
						3
					</Center>
				</Box>
			</Flex>
			<br />
			<hr />
			<br />
		</>
	);
};
