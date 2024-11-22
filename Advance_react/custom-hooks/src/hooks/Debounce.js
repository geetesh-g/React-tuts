import { useRef } from "react";

export const useDebounce = (func, delay) => {
	let { current: id } = useRef();

	const debounce = () => {
		id && clearTimeout(id);
		id = setTimeout(() => {
			func();
		}, delay);
	};
	return debounce;
};
