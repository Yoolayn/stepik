import { useState } from "react"

// validator: funkcja która sprawdzi poprawność danych i zwróci boolean
// save: funkcja która wyśle dane do parenta
// field: nazwa pola
function Text({ save, validator, field, errorMsg, required }) {
	const [ state, setState ] = useState(false)

	function error() {
		if (state) {
			return <p>{errorMsg}</p>
		}
	}

	function handler(e) {
		const input = e.target.value
		if (validator(input)) {
			setState(false)
			save(input)
		} else {
			setState(true)
		}
	}

	return <label>
			{field}: <input name={field} type="text" onChange={handler} required={required}/>
			{error()}
		</label>
}

export default Text
