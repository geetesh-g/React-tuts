import { useState } from "react";

const formInitState = {
	country: "",
	Rank: "",
	population: "",
};
const AddCountry = ({ handlePost }) => {
	const [formState, setFormState] = useState(formInitState);

	const handleChange = (e) => {
		const { value, name } = e.target;
		setFormState({ ...formState, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handlePost(formState);
	};

	const { country, Rank, population } = formState;
	return (
		<>
			<h1>Enter Country Details Here</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="country"
					onChange={handleChange}
					value={country}
					placeholder="Enter country name"
					required
				/>
				<br />
				<br />
				<input
					type="text"
					name="Rank"
					onChange={handleChange}
					value={Rank}
					placeholder="Enter Rank"
					required
				/>
				<br />
				<br />
				<input
					type="text"
					name="population"
					onChange={handleChange}
					value={population}
					placeholder="Enter population"
					required
				/>
				<br />
				<br />
				<input type="submit" value={"Add Country"} />
			</form>
		</>
	);
};

export default AddCountry;
