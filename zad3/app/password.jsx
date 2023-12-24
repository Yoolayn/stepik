import { useState } from "react";

function Password({ setValue, value }) {

	const [ valid, setValid ] = useState(0);

	function validator() {
		if (value[0] === "") {
			return;
		}
		if (valid < 4) {
			return <p>Password is too short!!</p>;
		} else if (valid < 7) {
			return <p>Password strength is weak</p>;
		} else if (valid < 10) {
			return <p>Password strength is medium</p>;
		} else {
			return <p>Password strength is high</p>;
		}
	}

	return <label>
		Password: <input type="password" onChange={e => setValue(e, setValid)} value={value[0]} required={true}/>
		{validator()}
	</label>;
}

export default Password;
