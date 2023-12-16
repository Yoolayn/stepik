"use client"

import { useState, useContext } from "react"
import { LoginContext } from "./LoginContext"

function FormLogin() {
	const logins = useContext(LoginContext)
	const [ email, setEmail ] = useState("")
	const [ password, setPassword ] = useState("")

	const isEmail = (email) =>
		/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

	function handleSubmit(e) {
		e.preventDefault()
		if (isEmail(email)) {
			const [ login ] = logins.filter(el => el.email === email)
			if (login && login.password === password) {
				alert("zalogowano!")
			} else {
				alert("nie znaleziono konta")
			}
		} else {
			alert("podaj prawidlowy email!")
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="mail">Email: </label>
			<input type="email" id="mail" onChange={e => setEmail(e.target.value)}/><br/>
			<label htmlFor="pass">Password: </label>
			<input type="password" id="pass" onChange={e => setPassword(e.target.value)}/><br/>
			<input type="submit" value="Login"/>
		</form>
	)
}

export default FormLogin
