import { React, forwardRef } from "react";
import "../App.css";

export const PinInput = forwardRef(
	({ maxChar, handleChange, handleBackspace }, ref) => {
		const handleKeyUp = (e) => {
			if (e.keyCode === 8) {
				handleBackspace(e);
			} else {
				handleChange(e);
			}
		};

		return <input ref={ref} maxLength={maxChar} onKeyUp={handleKeyUp} />;
	}
);
