import { useState } from "react";

export const useMyReducer = (reducer, initialState) => {
	const [state, setState] = useState(initialState);
	const dispatch = (action) => {
		const newState = reducer(state, action);
		setState(newState);
	};

	return [state, dispatch];
};

/* 

useReducer :- const [state , dispatch] = useReducer(reducer , initState)

dispatch ---> reducer ---> update State accordingly 



*/
