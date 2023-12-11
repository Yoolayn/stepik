"use client"
import { useState } from "react"
import ToDoForm from "./ToDoForm";

function ToDoItems() {
	const [ todos, setTodos ] = useState([])

	function getTodo(todo) {
		setTodos([...todos, todo])
	}

	return (
		<>
			<ul>
				{
					todos.map((todo) => {
						return <li key={"" + todo.date + " " + todo.description}>
								<p>Data: {todo.date}</p>
								<p>Description: {todo.description}</p>
							</li>
					})
				}
			</ul>
			<ToDoForm setTodo={getTodo}/>
		</>
	);
}

export default ToDoItems;
