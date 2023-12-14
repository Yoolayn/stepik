import { useContext } from "react"
import { ColorContext } from "./ColorContext"

export default function Paragraph() {
	const color = useContext(ColorContext)
	return (
		<p style={color}>Paragraph</p>
	)
}
