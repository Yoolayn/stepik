"use client"
import { useState } from "react"
import FormToDoItem from "./FormToDoItem";
import FormToDoData from "./FormToDoData";
import FormToDoMessages from "./FormToDoMessages";

function ToDoForm({ setTodo }) {
	const [ messages, setMessages ] = useState([])
	let itemDescription
	let itemDate

	const setDesc = (value) => {
		itemDescription = value
	}

	const setDate = (value) => {
		itemDate = value
	}

	const saveToDo = (event) => {
		if (!(itemDescription && itemDate)) {
			event.preventDefault()
			const message = {
				type: "error",
				contents: "Please set both date and description"
			}
			setMessages([message, ...messages])
		} else if (new Date() > new Date(itemDate)) {
			event.preventDefault()
			const message = {
				type: "validation",
				contents: "Date has to be later than today"
			}
			setMessages([message, ...messages])
		} else {
			const todo = {
				description: itemDescription,
				date: itemDate
			}
			setTodo(todo)
			const message = {
				type: "info",
				contents: "Task created successfully"
			}
			itemDate = ""
			itemDescription = ""
			setMessages([message])
		}
	}

	return (
		<form>
			<FormToDoItem returnItem={setDesc}/>
			<br/>
			<FormToDoData returnData={setDate}/>
			<br/>
			<button type="reset" onClick={saveToDo}>Save task</button>
			<FormToDoMessages messages={messages}/>
		</form>
	);
}

export default ToDoForm;
