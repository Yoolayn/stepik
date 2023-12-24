"use client";

import CreateAccount from "./CreateAccount";
import Login from "./login";
import Table from "./table";
import { UsersContext } from "./UsersContext";
import { useState } from "react";

function App() {

	const [ context, setContext ] = useState([]);
	const [ isLoggedin, setIsLoggedin ] = useState(false);
	const [ loggedUser, setLoggedUser ] = useState({});

	return (
		<>
		{
			isLoggedin ? (
				<Table user={loggedUser}/>
			) : (
				<>
					<UsersContext.Provider value={{value: context, setValue: v => setContext([...context, v])}}>
						<Login onLogin={i => {
							setIsLoggedin(true);
							setLoggedUser(i);
						}}/><br/><br/>
						<CreateAccount/>
					</UsersContext.Provider>
				</>
			)
		}
		</>
	);
}

export default App;
