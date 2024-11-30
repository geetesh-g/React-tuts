import "../App.css";
import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { PinInput } from "./PinInput";

export const PinTab = ({ length, maxChar }) => {
	const [pinTabLength] = useState(new Array(length).fill("a"));
	const inputRef = useRef([]);

	useEffect(() => {
		inputRef.current[0].focus();
	}, [length, maxChar]);

	const handleChange = (e, index) => {
		if (index < length - 1 && e.target.value.length === maxChar)
			inputRef.current[index + 1].focus();
	};

	const handleBackspace = (e, index) => {
		if (index > 0 && e.target.value.length === 0) {
			inputRef.current[index - 1].focus();
		}
	};

	const handlePast = (e, index) => {
		const OTP = e.clipboardData.getData("text").split("");
		console.log(OTP);
		if (index < length - 1 && e.target.value.length === maxChar) {
		}
	};
	return (
		<>
			<h2>Enter OPT here 👇👇</h2>
			<div className="inputBar" onPaste={handlePast}>
				{pinTabLength?.map((el, index) => {
					return (
						<PinInput
							key={index}
							maxChar={maxChar}
							ref={(ele) => {
								inputRef.current[index] = ele;
							}}
							handleChange={(e) => handleChange(e, index)}
							handleBackspace={(e) => handleBackspace(e, index)}
						/>
					);
				})}
			</div>
		</>
	);
};

PinTab.propType = {
	length: PropTypes.number.isRequired,
	maxChar: PropTypes.number,
};
