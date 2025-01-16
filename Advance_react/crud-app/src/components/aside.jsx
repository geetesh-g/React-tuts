import React, { useEffect } from "react";
import {
	Box,
	IconButton,
	VStack,
	AccordionPanel,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	Checkbox,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useSearchParams } from "react-router-dom";

export default function Sidebar({ isOpen, onToggle }) {
	const [category, setCategory] = React.useState([]);
	const [searchParams, setSearchParams] = useSearchParams();

	const handleChange = (e) => {
		let newCategory = [...category];
		const { value } = e.target;
		if (newCategory.includes(value)) {
			newCategory = newCategory.filter((el) => el !== value);
		} else {
			newCategory.push(value);
		}

		setCategory(newCategory);
	};

	useEffect(() => {
		const params = {
			category,
		};
		setSearchParams(params);
	}, [category]);
	return (
		<Box
			bg="aliceblue"
			h="100%"
			overflowY="auto"
			transition="width 0.3s"
			w={isOpen ? "200px" : "10%"}
			border={"1px solid #ccc"}
			pt={"64px"}
		>
			{/* Toggle Button */}
			<Box textAlign="right" p={2}>
				<IconButton
					icon={isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					onClick={onToggle}
					aria-label="Toggle Sidebar"
					size="md"
					variant="ghost"
				/>
			</Box>

			{/* Sidebar Content */}
			{isOpen && (
				<Accordion
					defaultIndex={[0]}
					allowMultiple
					width={"100%"}
					bg={"white"}
					boxShadow={"md"}
				>
					<AccordionItem>
						<h2>
							<AccordionButton>
								<Box as="span" flex="1" textAlign="left">
									Filter
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel>
							<VStack
								spacing={4}
								align="stretch"
								px={isOpen ? 4 : 2}
								py={4}
								fontSize="md"
							>
								<Checkbox value={"men"} onChange={(e) => handleChange(e)}>
									Men
								</Checkbox>
								<Checkbox value={"women"} onChange={(e) => handleChange(e)}>
									Women
								</Checkbox>
								<Checkbox value={"kids"} onChange={(e) => handleChange(e)}>
									Kids
								</Checkbox>
							</VStack>
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			)}
		</Box>
	);
}
