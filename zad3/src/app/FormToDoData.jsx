function FormToDoData({ returnData }) {
	return (
		<>
			<label htmlFor="dateInput">Data:</label>
			<input
				type="date"
				id="dateInput"
				onChange={function (e) {
					returnData(e.target.value);
				}}
			/>
		</>
	);
}

export default FormToDoData;
