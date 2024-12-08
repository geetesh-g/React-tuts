import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { SearchIcon } from "@chakra-ui/icons";

function TodoInput({ handlePost }) {
	const ref = useRef(null);
	useEffect(() => {
		ref.current.focus();
	}, []);

	const handleClick = () => {
		const todo = {
			title: ref.current.value,
			status: false,
		};
		handlePost(todo);
		ref.current.value = "";
	};

	return (
		<Box maxWidth="400px" mx="auto" mt="20px">
			<InputGroup>
				<InputLeftElement cursor={"pointer"} onClick={handleClick}>
					<SearchIcon color="gray.500" />
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
