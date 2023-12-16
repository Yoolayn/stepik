"use client"

import FormLogin from "./login"
import { LoginContext } from "./LoginContext"
import logins from "./logins.json"

export default function Home() {
	return (
		<LoginContext.Provider value={logins}>
			<FormLogin/>
		</LoginContext.Provider>
	)
}
