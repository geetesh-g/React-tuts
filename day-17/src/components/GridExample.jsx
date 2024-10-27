import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";

export const GridExample = () => {
	return (
		<>
			<Heading size="lg">Grid</Heading>
			<Text>In grid each item has equal distence from staetin points</Text>
			<br />
			<Grid templateColumns={"repeat(3, 1fr)"}>
				<GridItem h={"50px"} w={"100px"} bg={"cyan"}>
					1
				</GridItem>
				<GridItem h={"50px"} w={"180px"} bg={"pink"}>
					2
				</GridItem>
				<GridItem h={"50px"} w={"100px"} bg={"teal"}>
					3
				</GridItem>
			</Grid>
		</>
	);
};
