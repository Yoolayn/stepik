import { JediContext } from "./jediContext";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import ListControls from "./listControls";

function JediList() {
	const { jediList } = useContext(JediContext);

	if (!jediList || jediList.length === 0) {
		return <span>There are no jedi!</span>;
	}

	return <>
		<ul>
			<h2>Jedi List:</h2>
				{jediList.map(j => {
					return <li key={uuidv4()}>{j.firstName} {j.lastName}</li>;
				})}
			</ul>
			<ListControls/>
		</>;
}

export default JediList;
