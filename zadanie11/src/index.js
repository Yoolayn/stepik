const printNumber = async () => {
	for (let i = 1; i <= 5; i++) {
		await new Promise((resolve) =>
			setTimeout(() => {
				console.log(i);
				resolve();
			}, 1000)
		);
	}
}
