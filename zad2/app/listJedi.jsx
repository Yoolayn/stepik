import { v4 as uuidv4 } from "uuid";

function ListJedi({ jedi }) {

	if (Object.keys(jedi).length === 0) {
		return <ul>
				<span>Jedi List:</span>
				<li>Empty</li>
			</ul>;
	}

	return (
		<ul>
			<span>Jedi List:</span>
			{jedi.map(j => {
				return <li key={uuidv4()}>{j.firstName} {j.lastName}</li>;
			})}
		</ul>
	);
}

export default ListJedi;
