import { Box, Button, Container, Heading, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	loginFailureAction,
	loginRequestAction,
	loginSuccessAction,
} from "../Redux/Auth/action";
import axios from "axios";
const baseURL = "https://reqres.in/api/login";
const initUser = {
	email: null,
	password: null,
};

export const Auth = () => {
	const inputRef = useRef(initUser);
	const dispatch = useDispatch();

	const handleSubmit = () => {
		const userData = {
			email: inputRef.current.email.value,
			password: inputRef.current.password.value,
		};

		dispatch(loginRequestAction());
		try {
			axios
				.post(baseURL, userData)
				.then((res) => {
					dispatch(loginSuccessAction(res.data.token));
				})
				.catch((err) => {
					dispatch(loginFailureAction());
				});
		} catch (err) {
			dispatch(loginFailureAction());
		}

		inputRef.current.email.value = "";
		inputRef.current.password.value = "";
	};
	return (
		<Container w={"60%"}>
			<Box
				border={"1px solid #ccc"}
				p={10}
				m={"auto"}
				my={10}
				borderRadius={10}
				boxShadow={"lg"}
			>
				<Heading size={"lg"}>Login / Signup</Heading>
				<Input
					placeholder="Enter Email"
					mt={3}
					name="email"
					ref={(el) => (inputRef.current.email = el)}
				/>
				<Input
					placeholder="Enter Password"
					mt={3}
					name="password"
					ref={(el) => (inputRef.current.password = el)}
				/>
				<Button mt={3} colorScheme="blue" onClick={handleSubmit}>
					Submit
				</Button>
			</Box>
		</Container>
	);
};
