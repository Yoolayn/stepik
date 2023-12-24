import { useState } from "react";

function Surname({ setValue, value }) {

	const [ valid, setValid ] = useState(false);

	function validator() {
		if (value[0] === "") {
			return;
		}
		if (!valid) {
			return <p>Surname is too short!!</p>;
		}
	}

	return <label>
		Surname: <input type="text" onChange={e => setValue(e, setValid)} value={value[0]} required={true}/>
		{validator()}
	</label>;
}

export default Surname;
