import "./App.css";
import { BoxExample } from "./components/BoxExample";
import { CenterExapmle } from "./components/CenterExapmle";
import { ContainerExample } from "./components/ContainerExample";
import { FlexExample } from "./components/flexExample";
import { GridExample } from "./components/GridExample";
import SimpleGridEx from "./components/SimpleGridEx";
import {
	HStackExample,
	StackExample,
	VStackExample,
} from "./components/StackExample";
import { Heading, Text } from "@chakra-ui/react";

function App() {
	return (
		<div className="App">
			<Heading>Chakra UI Day 1</Heading>

			{/* <BoxExample />
			<CenterExapmle />
			<ContainerExample />
			<SimpleGridEx /> */}
			<Heading size={"lg"}>HStack</Heading>
			<Text>HStack Example</Text>
			<Text> This stack aligns items vertically </Text>
			<HStackExample />
			<hr />
			<Heading size={"lg"}>VStack</Heading>
			<Text> VStack Example</Text>
			<Text>This stack aligns item vertically</Text>
			<VStackExample />
			<hr />
			<Heading size={"lg"}>Stack</Heading>
			<Text>
				This is exapmle of a simple stack component which by default aligns
				items vertically but it can be change using "direction" attribute{" "}
			</Text>
			<StackExample />
			<hr />
			<Heading size={"lg"}>Flex</Heading>
			<Text>Flex divides the gap equally between it's child</Text>
			<FlexExample />
			<GridExample />
			<br />
		</div>
	);
}

export default App;