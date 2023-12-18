import Text from "./text"

function Name({ save }) {

	function validator(i) {
		return i.length > 0
	}

	return <Text save={save} validator={validator} field="Name" errorMsg="name is too short" required={true}/>

}

export default Name
