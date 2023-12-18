import Text from "./text"

function Email({ save }) {

	function validator(email) {
		return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
	}

	return <Text save={save} validator={validator} field="Email" errorMsg="email is not correct" required={true}/>

}

export default Email
