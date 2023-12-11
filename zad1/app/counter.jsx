"use client"
import { useEffect, useState } from "react"

function Counter() {
	const [ count, setCount ] = useState(0)

	useEffect(() => {
		const lb = (event) => {
			event.preventDefault()
			setCount(count + 1)
		}
		const rb = (event) => {
			event.preventDefault()
			setCount(count - 1)
		}

		document.getElementById("counterButton").addEventListener("click", lb)
		document.getElementById("counterButton").addEventListener("contextmenu", rb)

		return () => {
			document.getElementById("counterButton").removeEventListener("click", lb)
			document.getElementById("counterButton").removeEventListener("contextmenu", rb)
		}
	}, [count, setCount])

	return (
		<button id="counterButton" type="button">{count}</button>
	)
}

export default Counter
