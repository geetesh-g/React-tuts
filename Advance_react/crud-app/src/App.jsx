import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import AllRoutes from "./components/AllRoutes";
import Sidebar from "./components/aside";

function App() {
	const [isSidebarOpen, setSidebarOpen] = useState(true);

	return (
		<Box>
			{/* Navbar */}
			<Navbar />

			{/* Main Layout */}
			<Box
				display="flex"
				h="calc(100vh - 60px)" // Full height minus Navbar
			>
				{/* Sidebar */}

				<Sidebar
					isOpen={isSidebarOpen}
					onToggle={() => setSidebarOpen(!isSidebarOpen)}
				/>
				{/* Main Content */}
				<Box flex="1" p={4} overflowY="auto">
					<AllRoutes />
				</Box>
			</Box>
		</Box>
	);
}

export default App;
