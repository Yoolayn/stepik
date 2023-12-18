"use client"
import Form from "./form"

export default function Home() {
	return (
		<Form addLogin={o => {
			console.log("hello from page")
			console.log(o)
		}}/>
	)
}
