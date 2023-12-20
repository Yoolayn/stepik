import { useState } from "react"

function Birthday({ setValue, value }) {

	const [ valid, setValid ] = useState(false)

	function validator() {
		if (value[0] === "") {
			return
		}
		if (!valid) {
			return <p>Date of birth has to be earlier than today!</p>
		}
	}

	return <label>
		Birthday: <input type="date" onChange={e => setValue(e, setValid)} required={true}/>
		{validator()}
	</label>
}

export default Birthday
