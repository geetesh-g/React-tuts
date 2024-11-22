import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case "ADD":
			return state + payload;
		default:
			return state;
	}
};
const initState = 0;

export const Counter = () => {
	// const [count, setCount] = useState(0);

	const [state, dispatch] = useReducer(reducer, initState);

	/* 
    ------------------------------ useReducer ------------------------
    1.In this state management hook it takes in two args first is the reducer function and second one is 
     initial State.
    2.This hook returns an array of two elements first one is state and another one is reducer function 
    2.1 state :- it is state which is managed by reducer function 
    2.2 dispatch :-  this function is as name suggest that it works as a dispatcher wich 
                     which tells to the reducer function that what action has been performed

    3.Reducer takes in two parameters first one is state , and another is action respectively 
  
  */

	/* -------------------------useState------------------------------ 

	// let counter = 0;
	// const AddHandler = () => {
	// 	counter++;
	// 	console.log(counter);
	// 	return counter;
	// };

  the above method will not work becouse it only updates the value of counter 
  but it doesn't tells the react or it ain't sends the dispatch function to react
  so that react can compare with actual copy of reactDOM and made changes accordingly  
  
  */

	return (
		<div>
			<h2>Counter : {state}</h2>
			<button onClick={() => dispatch({ type: "ADD", payload: 1 })}>Add</button>
		</div>
	);
};
