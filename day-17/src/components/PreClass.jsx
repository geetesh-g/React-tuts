import React from "react";
import {
	Button,
	Stack,
	Input,
	HStack,
	PinInput,
	PinInputField,
} from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";

const PreClass = () => {
	const handleClick = () => {
		alert("Your OTP is 1234");
		<Navigate to="/auth" />;
	};
	return (
		<div style={{ width: "30%", margin: "auto" }}>
			<Stack spacing={6} align="center">
				<Input placeholder="Enter name" />
				<Input placeholder="Enter Email" />
				<Input placeholder="Enter Mobile number" />
				<Button colorScheme="teal" onClick={handleClick}>
					Send OTP
				</Button>
			</Stack>
			<div>
				<HStack>
					<PinInput>
						<PinInputField />
						<PinInputField />
						<PinInputField />
						<PinInputField />
					</PinInput>
				</HStack>
			</div>
		</div>
	);
};

const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<PreClass />} />
		</Routes>
	);
};
export { AllRoutes, PreClass };
