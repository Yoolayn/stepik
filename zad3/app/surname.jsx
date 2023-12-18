import Text from "./text"

function Surname({ save }) {

	function validator(i) {
		return i.length > 0
	}

	return <Text save={save} validator={validator} field="Surname" errorMsg="surname is too short" required={true}/>

}

export default Surname
