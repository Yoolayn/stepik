function Item({ item }) {
	function rating() {
		if (item.rating !== undefined) {
			return "Rating: " + item.rating.rate + ", " + item.rating.count
		} else {
			return "N/A"
		}
	}
	return <div className="StoreItem">
			<img src={item.image}/>
			<h1>{item.title}</h1>
			<h2>description: {item.description}</h2>
			<p>category: {item.category}</p>
			<p>{rating()}</p>
			<p>{item.price}</p>
		</div>

}

export default Item
