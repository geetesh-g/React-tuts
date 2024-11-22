import React from "react";
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	useDisclosure,
	Button,
} from "@chakra-ui/react";
import { useRef } from "react";

export function AlertDialogExample() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = React.useRef();

	return (
		<>
			<Button colorScheme="red" onClick={onOpen}>
				Delete Customer
			</Button>

			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
			>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							Delete Customer
						</AlertDialogHeader>

						<AlertDialogBody>
							Are you sure? You can't undo this action afterwards.
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button ref={cancelRef} onClick={onClose}>
								Cancel
							</Button>
							<Button colorScheme="red" onClick={onClose} ml={3}>
								Delete
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
}

export function AlertDialogEx() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = useRef();
	return (
		<>
			<Button colorScheme="green" onClick={onOpen}>
				Delete Customer
			</Button>
			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
			>
				<AlertDialogOverlay>
					<AlertDialogContent borderRadius={10} bg={"gray.300"}>
						<AlertDialogHeader fontSize={"lg"} fontWeight={"bold"}>
							Delete Customer
						</AlertDialogHeader>

						<AlertDialogBody>
							Are you sure want to delete this customer...?
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button ref={cancelRef} onClick={onClose}>
								{" "}
								Cancel{" "}
							</Button>

							<Button colorScheme="red" onClick={onClose} ml={3}>
								{" "}
								Delete
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>{" "}
		</>
	);
}
