import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { TodoInput } from "./TodoInput";
import { useEffect } from "react";
import axios from "axios";
import {
	failureAction,
	getSuccessAction,
	postSuccessAction,
	requestAction,
} from "../Redux/Todos/action";
import { Box, Heading } from "@chakra-ui/react";
const baseURL = "http://localhost:8080/todos";

export const Todo = () => {
	const { todos, isLoading, isErr } = useSelector((state) => {
		return {
			todos: state.TodosReducer.todos,
			isLoading: state.TodosReducer.isLoading,
			isErr: state.TodosReducer.isErr,
		};
	}, shallowEqual);

	const dispatch = useDispatch();

	const getData = () => {
		dispatch(requestAction());
		axios
			.get(baseURL)
			.then((res) => {
				dispatch(getSuccessAction(res.data));
			})
			.catch((err) => dispatch(failureAction()));
	};

	useEffect(() => {
		getData();
	}, []);

	const handleAdd = (input) => {
		const newTodo = {
			title: input,
			status: false,
		};

		dispatch(requestAction());

		axios
			.post(baseURL, newTodo)
			.then((res) => {
				dispatch(postSuccessAction(res.data));
			})
			.catch((err) => {
				dispatch(failureAction());
			});

		getData();
	};

	return (
		<Box>
			<Heading>Add Todo </Heading>
			<TodoInput addTodo={handleAdd} />
			<Heading size={"md"} mt={10}>
				Todo List
			</Heading>
			{todos.length && isLoading ? (
				<Heading size={"sm"}>Loading...</Heading>
			) : isErr ? (
				<Heading size={"sm"}>Something Went Wrong</Heading>
			) : (
				todos.map((item) => {
					return (
						<div key={item.id}>
							{item.title} --- {item.status ? "Completed" : "Pending"}
						</div>
					);
				})
			)}
		</Box>
	);
};

/* 
Lets try to understand actual behaviour of this component

on Mount --> it should fetch the todos data from server and should maintain the loading and error state also
also maintain the post todo functionality

*/
