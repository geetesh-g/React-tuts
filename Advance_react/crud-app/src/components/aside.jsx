import React, { useEffect, useState } from "react";
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
	RadioGroup,
	Radio,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useSearchParams } from "react-router-dom";

export default function Sidebar({ isOpen, onToggle }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const initialCategory = searchParams.getAll("category") || [];
	const initialOrder = searchParams.get("order") || "";
	const [order, setOrder] = useState(initialOrder);
	const [category, setCategory] = useState(initialCategory);
	// console.log(category);

	// handling the filtering
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

	// handling the sorting
	const handleSort = (val) => {
		console.log(val);
		if (val === order) {
			setOrder("");
		} else {
			setOrder(val);
		}
	};

	// Mount or updation logic
	useEffect(() => {
		const params = {
			category,
		};
		order && (params.order = order);
		setSearchParams(params);
	}, [category, order]);

	return (
		<Box
			bg="aliceblue"
			h="100%"
			overflowY="auto"
			transition="width 0.3s"
			w={isOpen ? "220px" : "10%"}
			border={"1px solid #ccc"}
			pt={"64px"}
		>
			{/* Toggle Button */}
			<Box textAlign="right">
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
					{/* Filtering */}

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
								<Checkbox
									value={"men"}
									onChange={(e) => handleChange(e)}
									isChecked={category.includes("men")}
								>
									Men
								</Checkbox>
								<Checkbox
									value={"women"}
									onChange={(e) => handleChange(e)}
									isChecked={category.includes("women")}
								>
									Women
								</Checkbox>
								<Checkbox
									value={"kids"}
									onChange={(e) => handleChange(e)}
									isChecked={category.includes("kids")}
								>
									Kids
								</Checkbox>
							</VStack>
						</AccordionPanel>
					</AccordionItem>

					{/* Sorting */}

					<AccordionItem>
						<h2>
							<AccordionButton>
								<Box as="span" flex="1" textAlign="left">
									Sort
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel>
							<RadioGroup onChange={handleSort} value={order}>
								<VStack
									spacing={4}
									align="stretch"
									px={isOpen ? 4 : 2}
									py={4}
									fontSize="md"
								>
									<Radio
										value="asc"
										name="order"
										defaultChecked={order === "asc"}
									>
										Ascending
									</Radio>
									<Radio
										value="desc"
										name="order"
										defaultChecked={order === "desc"}
									>
										Descending
									</Radio>
									<Radio value="" name="order" defaultChecked={order === ""}>
										None
									</Radio>
								</VStack>
							</RadioGroup>
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			)}
		</Box>
	);
}
