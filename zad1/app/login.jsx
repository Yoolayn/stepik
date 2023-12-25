"use client";

import { useState } from "react";

function Login() {
	const [ login, setLogin ] = useState("");
	const [ password, setPassword ] = useState("");

	function reset() {
		setLogin("");
		setPassword("");
	}

	function submit(e) {
		e.preventDefault();
		if (
			login === "login" &&
			password === "securepassword"
		) {
			alert("login successful!");
		} else {
			alert("login failed!");
		}
		reset();
	}

	return <>
			<form onSubmit={submit}>
				<label>
					Login: <input value={login} onChange={e => setLogin(e.target.value)} type="text" required/><br/>
				</label>
				<label>
					Password: <input value={password} onChange={e => setPassword(e.target.value)} type="password" required/><br/>
				</label>
				<button type="submit">Login</button>
			</form>
		</>;
	}

export default Login;
