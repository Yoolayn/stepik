import Text from "./text"

function Surname() {

	function validator(i) {
		return i.length > 4
	}

	function save(i) {
		console.log(i)
	}

	return <Text save={save} validator={validator} field="Surname" errorMsg="surname is too short"/>

}

export default Surname
