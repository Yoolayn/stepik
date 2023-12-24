"use client";
import { useState, useContext } from "react";
import { UsersContext } from "./UsersContext";

function Login() {
	const { value }	= useContext(UsersContext);
	const [ email, setEmail ] = useState("");
	const [ password, setPassword ] = useState("");

	function reset() {
		setEmail("");
		setPassword("");
	}

	function submit(e) {
		e.preventDefault();
		const users = value.filter(u => u.email === email);
		if (users.length === 0) {
			alert("account not found");
			return;
		}
		const user = users[0];
		if (user.password === password) {
			alert("successful login!");
		} else {
			alert("login failed!");
		}
		reset();
	}

	return (
		<form onSubmit={submit}>
			<label>
				Email: <input type="email" required={true} onChange={e => setEmail(e.target.value)} value={email}/><br/>
			</label>
			<label>
				Password: <input type="password" required={true} onChange={e => setPassword(e.target.value)} value={password}/><br/>
			</label>
			<button type="submit">Login</button>
		</form>
	);
}

export default Login;
