import "./App.css";
import { Counter } from "./components/Counter";
import { Debounce } from "./components/Debounce";
import { Throttle } from "./components/Throttle";
import { Timer } from "./components/Timer";
import { Reducer } from "./components/UseMyReducer";

function App() {
	return (
		<div className="App">
			{/* <Counter /> */}
			{/* <Timer /> */}
			{/* <Debounce /> */}
			{/* <Throttle /> */}
			<Reducer />
		</div>
	);
}

export default App;
