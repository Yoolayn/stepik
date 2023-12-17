import { useState } from "react"

function Password({ save }) {
	const [ pass, setPass ] = useState("")
	function validator(e) {
		const pass = e.target.value
		const len = pass.length
		if (len >= 1 && len <= 4) {
			setPass("too short")
		} else if (len > 4 && len <= 7) {
			save(pass)
			setPass("weak")
		} else if (len > 7 && len <= 10) {
			save(pass)
			setPass("average")
		} else if (len > 10) {
			save(pass)
			setPass("strong")
		} else {
			setPass("")
		}
	}

	function error() {
		if (pass !== "") {
			return <p>password is {pass}</p>
		}
	}

	return <label>
			Password: <input type="password" onChange={validator}></input>
			{error()}
		</label>
}

export default Password
