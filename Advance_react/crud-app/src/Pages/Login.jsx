import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Text,
	VStack,
	Center,
	Alert,
	AlertIcon,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../utils/login";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const auth = useSelector((store) => store.authReducer.auth);
	const ref = useRef();

	useEffect(() => {
		ref.current.focus();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const userData = {
			email,
			password,
		};
		dispatch(login(userData));
		setEmail("");
		setPassword("");
	};

	return (
		<Box
			w={{ base: "90%", sm: "80%", md: "50%", lg: "40%" }}
			m="auto"
			p={8}
			boxShadow="lg"
			borderRadius="lg"
			bg="white"
		>
			{/* Header */}
			<Center>
				<Heading color="blue.600" mb={4}>
					Welcome Back
				</Heading>
			</Center>
			<Text textAlign="center" fontSize="lg" color="gray.500" mb={8}>
				Please log in to your account
			</Text>

			{/* Form */}
			<form onSubmit={handleSubmit}>
				<VStack spacing={6}>
					{/* Email Field */}
					<FormControl isRequired>
						<FormLabel fontWeight="bold" color="gray.600">
							Email Address
						</FormLabel>
						<Input
							type="email"
							placeholder="Enter your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							focusBorderColor="blue.500"
							bg="gray.50"
							ref={ref}
						/>
					</FormControl>

					{/* Password Field */}
					<FormControl isRequired>
						<FormLabel fontWeight="bold" color="gray.600">
							Password
						</FormLabel>
						<Input
							type="password"
							placeholder="Enter your password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							focusBorderColor="blue.500"
							bg="gray.50"
						/>
					</FormControl>

					{/* Status Message */}
					{auth && (
						<Alert status="success" borderRadius="md">
							<AlertIcon />
							Login Successful!
						</Alert>
					)}
					{!auth && (
						<Alert status="info" borderRadius="md">
							<AlertIcon />
							Login to continue
						</Alert>
					)}

					{/* Submit Button */}
					<Button
						type="submit"
						colorScheme="blue"
						size="lg"
						width="full"
						isDisabled={auth}
						title="Click here to login"
					>
						Login
					</Button>
				</VStack>
			</form>
		</Box>
	);
}
