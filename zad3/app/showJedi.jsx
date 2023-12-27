import { JediContext } from "./jediContext";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import JediControls from "./jediControl";

function ShowJedi() {

	const { state } = useContext(JediContext);

	if (!state || Object.keys(state).length === 0) {
		return <span>No current jedi!</span>;
	}

	return <>
			<h1>{state.firstName} {state.lastName}</h1>
			<span>job: {state.job}</span><br/>
			<span>side: {state.side}</span>
			<ul>
				<span>weapons:</span>
				{Object.entries(state.weapons).map(([type, name]) => {
					return <li key={uuidv4()}>type: {type}; {type === "lightsaber" ? "color" : "name"}: {name}</li>;
				})}
			</ul>
			<JediControls/>
		</>;
}

export default ShowJedi;
