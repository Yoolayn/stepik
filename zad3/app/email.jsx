import Text from "./text"

function Email() {

	function validator(email) {
		return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
	}

	const save = i => console.log(i)

	return <Text save={save} validator={validator} field="Email" errorMsg="email is not correct"/>

}

export default Email
