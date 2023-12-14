import { useContext } from "react"
import { ColorContext } from "./ColorContext"

export default function PrimaryHeadline() {
	const color = useContext(ColorContext)

	return (
		<h1 style={color}>Primary Hello World!</h1>
	)
}
