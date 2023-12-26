"use client";

import { useState } from "react";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";

function App() {

	const [ comments, setComments ] = useState([{email: "mail@mail.com", name: "name"}]);

	return <>
			<CommentForm setComments={setComments}/>
			<CommentsList setComments={setComments} comments={comments}/>
		</>;
}

export default App;
