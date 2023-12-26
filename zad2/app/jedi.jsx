import { v4 as uuidv4 } from "uuid";

function Jedi({ jedi }) {
	return <>
		<div>
			<span>{jedi.firstName} {jedi.lastName}</span>
		</div>
		<div>
			<span>job: {jedi.job}</span>
		</div>
		<div>
			<span>side: {jedi.side}</span>
		</div>
		<div>
			<ul>
				<span>weapons:</span>
					{Object.entries(jedi.weapons).map(([weapon, name]) => {
						return <li key={uuidv4()}>type: {weapon}; name: {name}</li>;
					})
				}</ul>
			</div>
		</>;
}

export default Jedi;
