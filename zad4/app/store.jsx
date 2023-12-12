"use client"
import Item from "./item"
import Form from "./form"
import { useState, useEffect } from "react"

function Store() {
	const [ items, setItems ] = useState([])

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(res=>res.json())
			.then(json=>setItems(json))
	}, [])

	function addItem(item) {
		setItems([item, ...items])
	}

	return (
		<>
			<Form getResult={addItem}/>
			<div className="StoreContainer">
				{ items.map(product => {
					return <Item key={product.id} item={product}/>
				})}
			</div>
		</>
	)
}

export default Store
