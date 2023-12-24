import { useState } from "react";

function Email({ setValue, value }) {

	const [ valid, setValid ] = useState(false);

	function validator() {
		if (value[0] === "") {
			return;
		}
		if (!valid) {
			return <p>Email is not valid</p>;
		}
	}

	return <label>
		Email: <input type="email" onChange={e => setValue(e, setValid)} value={value[0]} required={true}/>
		{validator()}
	</label>;
}

export default Email;
