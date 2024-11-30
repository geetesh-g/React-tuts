import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAction, reduceAction } from "../Redux/action";

function Counter() {
	const count = useSelector((store) => store.counter);
	const dispatch = useDispatch();

	const handleAdd = () => {
		dispatch(addAction(1));
	};

	const handleReduce = () => {
		dispatch(reduceAction(1));
	};

	return (
		<div>
			<h2>Count : {count}</h2>
			<button onClick={handleAdd}>Add</button>
			<button onClick={handleReduce}>Reduce</button>
		</div>
	);
}

export default Counter;
