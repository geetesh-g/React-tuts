import {
	Box,
	Button,
	Container,
	Input,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

export const TodoInput = ({ addTodo }) => {
	const [input, setInput] = useState("");
	const handleClick = () => {
		addTodo(input);
		setInput("");
	};
	return (
		<>
			<Box maxWidth="400px" mx="auto" mt="20px">
				<InputGroup>
					<InputLeftElement cursor={"pointer"} onClick={handleClick}>
						<SearchIcon color="gray.500" />
					</InputLeftElement>
					<Input
						type="text"
						placeholder="Enter Todo..."
						focusBorderColor="blue.500"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
				</InputGroup>
			</Box>
		</>
	);
};

/*

import React from 'react';
import { Input, InputGroup, InputLeftElement, Box } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = () => {
  return (
    <Box maxWidth="400px" mx="auto" mt="20px">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.500" />
        </InputLeftElement>
        <Input 
          type="text" 
          placeholder="Search..." 
          focusBorderColor="blue.500"
        />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;

create an input tag 
also a button on clicking which user should able to add todo 


onClicking on add btn make a post request 
handle the reducer accordingly


*/
