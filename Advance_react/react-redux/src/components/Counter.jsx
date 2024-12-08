import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAction, reduceAction } from "../Redux/Counter/action";
import { Button, Container, Heading } from "@chakra-ui/react";

function Counter() {
	const count = useSelector((store) => store.CountReducer.count);
	const dispatch = useDispatch();

	const handleAdd = () => {
		dispatch(addAction(1));
	};

	const handleReduce = () => {
		dispatch(reduceAction(1));
	};

	return (
		<Container
			w={"60%"}
			p={10}
			m={"auto"}
			my={20}
			border={"1px solid #ccc"}
			borderRadius={10}
			boxShadow={"lg"}
		>
			<Heading size={"lg"} mt={4}>
				Counter
			</Heading>
			<Heading size={"md"} mt={4}>
				Count : {count}
			</Heading>
			<Button onClick={handleAdd} mt={4} colorScheme="teal">
				Add
			</Button>
			<Button onClick={handleReduce} mt={4} ml={3} colorScheme="red">
				Reduce
			</Button>
		</Container>
	);
}

export default Counter;
