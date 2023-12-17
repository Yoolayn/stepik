"use client"
import Name from "./name"
import Surname from "./surname"
import Email from "./email"
import Password from "./password"
import Submit from "./submit"

export default function Form() {
		return <form>
			<h2>Create Account</h2>
			<Name/><br/>
			<Surname/><br/>
			<Email/><br/>
			<Password save={i => console.log(i)}/><br/>
			<label>
				Birthday: <input type="date"/><br/>
			</label>
			<label>
				Photo: <input type="file"/><br/>
			</label>
			<label>
				<input type="checkbox"/> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Warunki użytkowania</a><br/>
			</label>
			<Submit open={true}/>
			<button type="reset">Reset</button>
		</form>
}
