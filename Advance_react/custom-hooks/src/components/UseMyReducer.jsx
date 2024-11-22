import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { useMyReducer } from "../hooks/MyUseReducer";
const reducer = (state, { type, payload }) => {
	console.log(state);
	switch (type) {
		case "ADD":
			return { ...state, counter: state.counter + payload };
		default:
			return { ...state };
	}
};

const initialState = { counter: 0 };

const Reducer = () => {
	const [state, dispatch] = useMyReducer(reducer, initialState);
	console.log(state);
	return (
		<Box>
			<Heading>Counter : {state.counter}</Heading>
			<Button onClick={() => dispatch({ type: "ADD", payload: 1 })}>Add</Button>
		</Box>
	);
};

export { Reducer };
