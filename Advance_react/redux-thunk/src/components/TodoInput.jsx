import {
	Box,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { getTodos, addTodos } from "../Redux/Todo/action";
import { useDispatch } from "react-redux";

function TodoInput() {
	const ref = useRef(null);
	const dispatch = useDispatch();

	useEffect(() => {
		ref.current.focus();
	}, []);

	const handleClick = () => {
		const todo = {
			title: ref.current.value,
			status: false,
		};
		dispatch(addTodos(todo)).then(() => dispatch(getTodos));
		ref.current.value = "";
	};

	return (
		<Box maxWidth="400px" mx="auto" mt="20px">
			<Heading my={10}>Add Todo</Heading>
			<InputGroup>
				<InputLeftElement cursor={"pointer"} onClick={handleClick}>
					<AddIcon color={"gray.500"} />
				</InputLeftElement>
				<Input
					placeholder="Enter Todo..."
					focusBorderColor="blue.500"
					fontSize={"lg"}
					ref={ref}
				/>
			</InputGroup>
		</Box>
	);
}

export default TodoInput;
