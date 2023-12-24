import { useState } from "react";

function Name({ setValue, value }) {

	const [ valid, setValid ] = useState(false);

	function validator() {
		if (value[0] === "") {
			return;
		}
		if (!valid) {
			return <p>Name is too short!!</p>;
		}
	}

	return <label>
		Name: <input type="text" onChange={e => setValue(e, setValid)} value={value[0]} required={true}/>
		{validator()}
	</label>;
}

export default Name;
