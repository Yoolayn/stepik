function Table({ user }) {

	return (
		<table style={{border: "solid 1px black"}}>
			<thead>
				<tr>
					<th>name</th>
					<th>surname</th>
					<th>email</th>
					<th>password</th>
					<th>birthday</th>
					<th>image</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{user.name}</td>
					<td>{user.surname}</td>
					<td>{user.email}</td>
					<td>{user.password}</td>
					<td>{user.birthday}</td>
					<td><img
					src={URL.createObjectURL(user.image)}
					alt="User uploaded image"
					style={{ maxWidth: "100px", maxHeight: "100px" }}
					/></td>
				</tr>
			</tbody>
		</table>
	);
}

export default Table;

