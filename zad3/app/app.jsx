"use client";

import CreateAccount from "./CreateAccount";
import Login from "./login";
import { UsersContext } from "./UsersContext";
import { useState } from "react";

function App() {

	const [ context, setContext ] = useState([]);

	return (
		<UsersContext.Provider value={{value: context, setValue: v => setContext([...context, v])}}>
			<Login/><br/><br/>
			<CreateAccount/>
		</UsersContext.Provider>
	);
}

export default App;
