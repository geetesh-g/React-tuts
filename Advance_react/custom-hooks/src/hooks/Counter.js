import { useState } from "react";

export const useCounter = (initialValue = 0, payload) => {
	console.log(initialValue, payload);
	const [state, setState] = useState(initialValue);
	const setter = () => {
		setState((prev) => prev + payload);
	};

	return [state, setter];
};
