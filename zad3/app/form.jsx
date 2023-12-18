"use client"
import Name from "./name"
import Surname from "./surname"
import Email from "./email"
import Password from "./password"
import { useState } from "react"

export default function Form({ addLogin }) {

	const [ button, setButton ] = useState(true)
	const [ submit, setSubmit ] = useState(0)
	const [ userData, setUserData ] = useState({
		name: undefined,
		surname: undefined,
		email: undefined,
		password: undefined,
		birthday: undefined,
		photo: undefined,
		accepted: false
	})

	function checkButton() {
		setButton(!(submit === 5 && userData.accepted))
	}

	function formSubmit(e) {
		e.preventDefault()
		addLogin(userData)
	}

	const save = (input, field) => {
		const data = userData
		if (data[field] === undefined && field !== "photo") {
			setSubmit(submit + 1)
		}
		data[field] = input
		setUserData(data)
		checkButton()
		console.log(data)
		console.log(submit)
	}

	function birthday(e) {
		const enteredDate = new Date(e.target.value)
		const todayDate = new Date()
		if (enteredDate < todayDate) {
			const data = userData
			if (data["birthday"] === undefined) {
				setSubmit(submit + 1)
			}
			data["birthday"] = enteredDate.toISOString().split('T')[0]
			setUserData(data)
			checkButton()
			console.log(data)
		}
	}

	document.addEventListener("reset", () => {
		setSubmit(0)
		setUserData({
			name: undefined,
			surname: undefined,
			email: undefined,
			password: undefined,
			birthday: undefined,
			photo: undefined,
			accepted: false
		})
	})

	return <form onSubmit={formSubmit}>
		<h2>Create Account</h2>
		<Name save={i => save(i, "name")}/><br/>
		<Surname save={i => save(i, "surname")}/><br/>
		<Email save={i => save(i, "email")}/><br/>
		<Password save={i => save(i, "password")}/><br/>
		<label>
			Birthday: <input type="date" required onChange={birthday}/><br/>
		</label>
		<label>
			Photo: <input type="file" onChange={e => save(e.target.value, "photo")}/><br/>
		</label>
		<label>
			<input id="rulez" type="checkbox" onClick={() => {
				const status = document.getElementById("rulez").checked
				const data = userData
				data.accepted = status
				setUserData(data)
				console.log(data)
				console.log(submit)
				checkButton()
			}}/> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Warunki użytkowania</a><br/>
		</label>
		<button type="submit" disabled={button}>Add user</button>
		<button type="reset">Reset</button>
	</form>
}
