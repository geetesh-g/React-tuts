import "./App.css";
import { useEffect } from "react";
import Countries from "./components/Countries/Countries";

function App() {
	useEffect(() => {}, []);

	return (
		<div className="App">
			<Countries />
		</div>
	);
}

export default App;
