const JSXRules = (props) => {
	return <blockquote>
			{props.text}
		</blockquote>
}

const FancyTable = (props) => {
	const elements = () => {
		const elems = [];
		for (let i = 1; i <= props.n; i++) {
			elems.push(<p>{i}</p>)
		}
		return elems
	}
	return (
		<>
			{ elements() }
		</>
	)
}

const Multiple = (props) => {
	const { name, number } = props
	const elems = []
	const elements = () => {
		for (let i = 1; i <= number; i++) {
			elems.push(<p>{i}</p>)
		}
		return elems
	}
	return (
		<>
			<h2>{name}</h2>
			<ul>{elements()}</ul>
		</>
	)
}

const App = () => {
	return <div>
		<JSXRules text="smart quote made by a smart person"/>
		<FancyTable n="5"/>
		<Multiple name = "name" number="5"/>
		</div>
}

ReactDOM.render(<App />, document.getElementById('root'))
