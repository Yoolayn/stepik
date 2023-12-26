"use client";

import Display from "./display";
import Create from "./create";
import { useState, useEffect } from "react";

function App() {
	const [ user, setUser ] = useState({});

	useEffect(() => {
		const storageUser = localStorage.getItem("user");
		if (storageUser) {
			let parsedUser = {};
			try {
				parsedUser = JSON.parse(storageUser);
			} catch {
				console.error("error parsing user data from localStorage");
				return;
			}
			setUser(parsedUser);
		}
	}, []);

	return <>
			{ Object.keys(user).length > 0 ? (
				<Display user={user} setUser={setUser}/>
			) : (
				<Create setUser={setUser}/>
			)}
		</>;
}

export default App;
