import React, { useEffect } from "react";
import TodoInput from "./TodoInput";
import { Heading, List, ListItem, UnorderedList } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../Redux/Todo/action";

export default function Todo() {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTodos);
	}, []);

	return (
		<div>
			<TodoInput />
			<Heading my={10}>Todo List</Heading>
			<List>
				<UnorderedList maxWidth={"200px"} mx={"auto"} mt={10}>
					{todos.map((el) => {
						return (
							<ListItem key={el.id}>
								{el.title} -- {el.status ? "Completed" : "Pending"}
							</ListItem>
						);
					})}
				</UnorderedList>
			</List>
		</div>
	);
}
