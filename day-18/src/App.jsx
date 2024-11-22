import "./App.css";
import Navbar from "./components/Navbar";
import { Main } from "./Main";
import { AllRoutes } from "./routes/Routes";

function App() {
	return (
		<div className="App">
			<Navbar />
			<AllRoutes />
		</div>
	);
}

export default App;
