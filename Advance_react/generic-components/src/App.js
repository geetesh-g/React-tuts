import "./App.css";
import { PinTab } from "./components/PinTab";

function App() {
	return (
		<div className="App">
			<PinTab length={4} maxChar={1} />
		</div>
	);
}

export default App;
