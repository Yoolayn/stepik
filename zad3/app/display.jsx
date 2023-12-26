import "./style.scss";

function Display({ user, setUser }) {
	return <>
		<table>
			<tbody>
				<tr>
					<td>name</td>
					<td>{user.name}</td>
				</tr>
				<tr>
					<td>email</td>
					<td>{user.email}</td>
				</tr>
				<tr>
					<td>password</td>
					<td>{user.password}</td>
				</tr>
				<tr>
					<td>choice</td>
					<td>{user.choice}</td>
				</tr>
				<tr>
					<td>citizenship</td>
					<td>{user.citizenship}</td>
				</tr>
			</tbody>
		</table>
		<button type="submit" onClick={() => {
			localStorage.removeItem("user");
			setUser({});
		} }>Delete user data</button>
		</>;
}

export default Display;
