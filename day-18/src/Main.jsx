import {
	Box,
	Container,
	Heading,
	Image,
	SimpleGrid,
	Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
const baseURL = "https://fakestoreapi.com/products";

export const Main = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const data = axios.get(`${baseURL}`).then((res) => {
			console.log(res.data);
			setData(res.data);
		});
	}, []);
	return (
		<Container maxW={"60%"}>
			<SimpleGrid columns={[1, 1, 2, 3]} py={10} spacing={5}>
				{data?.map((item) => {
					return (
						<Box
							key={item.id}
							p={"2% 2% 2% 16%"}
							boxShadow={
								"rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
							}
							borderRadius={8}
						>
							<Image
								src={item.image}
								boxSize={["200px", "250px", "150px", "200px"]}
								p={[0, 0, 5, 5]}
							/>
							<Text>{item.title.substring(0, 30)}</Text>
						</Box>
					);
				})}
			</SimpleGrid>
		</Container>
	);
};
