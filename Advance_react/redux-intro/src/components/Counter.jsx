import { store } from "../redux/store";
import { add, reduce } from "../redux/action";
import { useState } from "react";

function Counter() {
	const { getState, dispatch, subscribe } = store;
	const [count, setCount] = useState(getState().counter);
	const addAct = add();
	const reduceAct = reduce();
	subscribe(() => {
		const newCount = getState().counter;
		setCount(newCount);
	});

	return (
		<div>
			<h1>Counter : {count}</h1>
			<button onClick={() => dispatch(addAct)}>Add</button>
			<button onClick={() => dispatch(reduceAct)}>Reduce</button>
		</div>
	);
}

export default Counter;
