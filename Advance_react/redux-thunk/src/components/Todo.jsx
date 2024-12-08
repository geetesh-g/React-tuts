import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import { Heading, List, ListItem, UnorderedList } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
	failureAction,
	getSuccessAction,
	postSuccessAction,
	requestAction,
} from "../Redux/Todo/action";
const url = "http://localhost:8080/todos";

export default function Todo() {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();
	const getTodos = () => {
		dispatch(requestAction());
		axios
			.get(url)
			.then((res) => {
				console.log(res.data);
				dispatch(getSuccessAction(res.data));
			})
			.catch((err) => {
				dispatch(failureAction());
			});
	};
	const handlePost = (input) => {
		dispatch(requestAction());
		axios
			.post(url, input)
			.then((res) => {
				dispatch(postSuccessAction(res.data));
				console.log(res);
			})
			.catch(() => {
				dispatch(failureAction());
			});
		getTodos();
	};
	console.log(todos);

	useEffect(() => {
		getTodos();
	}, []);
	return (
		<div>
			<TodoInput handlePost={handlePost} />
			<Heading my={10}>Todo</Heading>
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
