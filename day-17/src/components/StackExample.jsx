import { Box, HStack, Stack, VStack } from "@chakra-ui/react";

export const HStackExample = () => {
	return (
		<HStack spacing={4} placeContent={"center"}>
			<Box
				h={{ base: 10, sm: 12, md: 14, lg: 16, xl: 18, "2xl": 20 }}
				w={{ base: 10, sm: 12, md: 14, lg: 16, xl: 18, "2xl": 20 }}
				bg={"teal"}
			>
				1
			</Box>
			<Box
				h={{ base: 10, sm: 12, md: 14, lg: 16, xl: 18, "2xl": 20 }}
				w={{ base: 10, sm: 12, md: 14, lg: 16, xl: 18, "2xl": 20 }}
				bg={"cyan"}
			>
				2
			</Box>
			<Box
				h={{ base: 10, sm: 12, md: 14, lg: 16, xl: 18, "2xl": 20 }}
				w={{ base: 10, sm: 12, md: 14, lg: 16, xl: 18, "2xl": 20 }}
				bg={"pink"}
			>
				3
			</Box>
		</HStack>
	);
};

export const VStackExample = () => {
	return (
		<VStack spacing={4} align={"center"}>
			<Box
				h={{ base: 10, sm: 12, md: 14, lg: 16, xl: 18, "2xl": 20 }}
				w={{ base: 10, sm: 12, md: 14, lg: 16, xl: 18, "2xl": 20 }}
				bg={"teal"}
			>
				1
			</Box>
			<Box
				h={{ base: 10, sm: 12, md: 14, lg: 16, xl: 18, "2xl": 20 }}
				w={{ base: 10, sm: 12, md: 14, lg: 16, xl: 18, "2xl": 20 }}
				bg={"cyan"}
			>
				2
			</Box>
			<Box
				h={{ base: 10, sm: 12, md: 14, lg: 16, xl: 18, "2xl": 20 }}
				w={{ base: 10, sm: 12, md: 14, lg: 16, xl: 18, "2xl": 20 }}
				bg={"pink"}
			>
				3
			</Box>
		</VStack>
	);
};

export const StackExample = () => {
	return (
		<Stack spacing={4} align={"center"}>
			<Box
				h={{ base: 10, sm: 12, md: 14, lg: 16, xl: 18, "2xl": 20 }}
				w={{ base: 10, sm: 12, md: 14, lg: 16, xl: 18, "2xl": 20 }}
				bg={"teal"}
			>
				1
			</Box>
			<Box
				h={{ base: 10, sm: 12, md: 14, lg: 16, xl: 18, "2xl": 20 }}
				w={{ base: 10, sm: 12, md: 14, lg: 16, xl: 18, "2xl": 20 }}
				bg={"cyan"}
			>
				2
			</Box>
			<Box
				h={{ base: 10, sm: 12, md: 14, lg: 16, xl: 18, "2xl": 20 }}
				w={{ base: 10, sm: 12, md: 14, lg: 16, xl: 18, "2xl": 20 }}
				bg={"pink"}
			>
				3
			</Box>
		</Stack>
	);
};
