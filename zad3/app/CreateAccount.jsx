"use client";
import { useState, useEffect, useContext } from "react";
import Name from "./name";
import Surname from "./surname";
import Email from "./email";
import Password from "./password";
import Birthday from "./birthday";
import { UsersContext } from "./UsersContext";

function CreateAccount() {
	const [ name, setName ] = useState(["", false]);
	const [ surname, setSurname ] = useState(["", false]);
	const [ email, setEmail ] = useState(["", false]);
	const [ password, setPassword ] = useState(["", false]);
	const [ birthday, setBirthday ] = useState(["", false]);
	const [ image, setImage ] = useState(["", false]);
	const [ terms, setTerms ] = useState(false);
	const [ button, setButton ] = useState(true);
	const { value, setValue } = useContext(UsersContext);

	function nameValidator(event, isValid) {
		const input = event.target.value;
		const boolean = input.length > 4;
		isValid(boolean);
		setName([input, boolean]);
	}
	function surnameValidator(event, isValid) {
		const input = event.target.value;
		const boolean = input.length > 4;
		setSurname([input, boolean]);
		isValid(boolean);
	}
	function emailValidator(event, isValid) {
		const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
		const input = event.target.value;
		const boolean = isEmail(input);
		setEmail([input, boolean]);
		isValid(boolean);
	}
	function passwordValidator(event, isValid) {
		const input = event.target.value;
		const len = input.length;
		setPassword([input, len >= 4]);
		isValid(len);
	}
	function birthdayValidator(event, isValid) {
		const input = new Date(event.target.value);
		const today = new Date();
		isValid(input < today);
		setBirthday(today.toISOString().split("T")[0]);
	}

	useEffect(() => {
		setButton(
			!(
				name[1] &&
				surname[1] &&
				email[1] &&
				password[1] &&
				birthday[1] &&
				terms
			)
		);
	}, [name, surname, email, password, birthday, terms]);

	function reset() {
		setName(["", false]);
		setSurname(["", false]);
		setEmail(["", false]);
		setPassword(["", false]);
		setBirthday(["", false]);
		setImage(["", false]);
		setTerms(false);
	}

	return <form onSubmit={e => {
		e.preventDefault();
		const user = {
			name: name[0],
			surname: surname[0],
			email: email[0],
			password: password[0],
			birthday: birthday[0],
			image: image[0]
		};
		reset();
		const existingMail = value.filter(u => u.email === user.email);
		if (existingMail.length > 0) {
			alert("account with provided email already exists!");
			return;
		}
		setValue(user);
	}}>
			<Name setValue={nameValidator} value={name}/><br/>
			<Surname setValue={surnameValidator} value={surname}/><br/>
			<Email setValue={emailValidator} value={email}/><br/>
			<Password setValue={passwordValidator} value={password}/><br/>
			<Birthday setValue={birthdayValidator} value={birthday}/><br/>
			<label>
				Image: <input type="file" onChange={e => setImage(e.target.value)}/><br/>
			</label>
			<label>
				<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
					Terms and condtions:
				</a>
				<input type="checkbox" required={true} onChange={() => setTerms(!terms)} checked={terms}/>
				<br/>
			</label>
		<button type="submit" disabled={button}>Submit</button>
		<button type="reset">Reset</button>
		</form>;
}

export default CreateAccount;
