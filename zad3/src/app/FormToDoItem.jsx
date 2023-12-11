function FormToDoItem({ returnItem }) {
	return (
		<>
			<label htmlFor="itemInput">Item:</label>
			<input
				type="text"
				id="itemInput"
				onChange={function (e) {
					returnItem(e.target.value);
				}}
			/>
		</>
	);
}

export default FormToDoItem;
