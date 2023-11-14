const Header = (props) => {
	return <h1>{props.title}</h1>;
}

const ShoppingList = (props) => {
	return <ul>
		{
			props.items.map((item) => {
				return <li>{item}</li>
			})
		}
		</ul>;
}

const UserCard = (props) => {
	const { username, email } = props.user
	return <div>
		<h1>{username}</h1>
		<p>{email}</p>
		</div>
}

const NavigationBar = () => {
	return <div>
		<a href="#">link 1</a><br/>
		<a href="#">link 2</a><br/>
		<a href="#">link 3</a><br/>
		<a href="#">link 4</a>
		</div>
}

const Footer = (props) => {
	return <footer>
		{props.children}
		</footer>
}

const App = () => {
	const itemList = [
		"milk",
		"bread",
		"eggs",
		"fruits",
		"vegetables"
	]

	const user = {
		username: "Julian",
		email: "foobar@email.com"
	}

	return <div>
		<Header title="React page!"/>
		<ShoppingList items={itemList}/>
		<UserCard user={user}/>
		<NavigationBar />
		<Footer>
			<p>footer1</p>
			<p>footer2</p>
			<p>footer3</p>
			<p>footer4</p>
			<p>footer5</p>
		</Footer>
		</div>
}

ReactDOM.render(<App />, document.getElementById('root'));
