"use client"
import Paragraph from "./Paragraph"
import PrimaryHeadline from "./PrimaryHeadline"
import SecondaryHeadline from "./SecondaryHeadline"
import SetColor from "./SetColor"
import { ColorContext } from "./ColorContext"
import { useState } from "react"

export default function Home() {
	const [ color, setColor ] = useState({ color: "red" })

	return (
		<ColorContext.Provider value={color}>
			<PrimaryHeadline/>
			<Paragraph/>
			<SecondaryHeadline/>
			<SetColor setColor={setColor}/>
		</ColorContext.Provider>
	)
}
