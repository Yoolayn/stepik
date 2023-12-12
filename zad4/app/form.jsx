import { useState } from "react"

function Form({ getResult }) {
	const [ item, setItem ] = useState({
		title: undefined,
		price: undefined,
		description: undefined,
		image: undefined,
		category: undefined,
	})

	function basicAssign(key) {
		return (e) => {
			item[key] = e.target.value
			setItem(item)
			console.log(item)
		}
	}

	function sendAway(e) {
		const result = Object.keys(item).reduce((acc, key)	=> {
			if (item[key] === undefined) {
				acc = false
			}
			return acc
		}, true)

		if (result) {
			fetch("https://fakestoreapi.com/products", {
				method:"POST",
				body: JSON.stringify(item)
			})
				.then(_=> {
					getResult(item)
				})
		} else {
			e.preventDefault()
		}
	}

	return (
		<form>
			<label htmlFor="title">Title:</label><br/>
			<input type="text" id="title" onChange={basicAssign("title")}/><br/>
		<label htmlFor="price">Price:</label><br/>
			<input type="text" id="price" onChange={e => {
				if (parseFloat(e.target.value)) {
					const num = parseFloat(e.target.value)
					item.price = num
					setItem(item)
				}
			}}/><br/>
		<label htmlFor="description">description:</label><br/>
			<input type="text" id="description" onChange={basicAssign("description")}/><br/>
		<label htmlFor="image">image:</label><br/>
			<input type="url" id="image" onChange={basicAssign("image")}/><br/>
		<label htmlFor="category">category:</label><br/>
			<input type="text" id="category" onChange={basicAssign("category")}/><br/>
		<button type="reset" onClick={sendAway}>Add Item</button>
		</form>
	)
}

export default Form
// fetch('https://fakestoreapi.com/products',{
// 		method:"POST",
// 		body:JSON.stringify(
// 			{
// 				title: 'test product',
// 				price: 13.5,
// 				description: 'lorem ipsum set',
// 				image: 'https://i.pravatar.cc',
// 				category: 'electronic'
// 			}
// 		)
// 	})
// 	.then(res=>res.json())
// 	.then(json=>console.log(json))
