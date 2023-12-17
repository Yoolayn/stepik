import Text from "./text"

function Name() {

	function validator(i) {
		return i.length > 4
	}

	function save(i) {
		console.log(i)
	}

	return <Text save={save} validator={validator} field="Name" errorMsg="name is too short"/>

}

export default Name
