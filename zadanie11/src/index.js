function printNumbers () {
	const range = Array.from({length: 5}, (_, i) => i + 1)
	range.map((elem) => {
		setTimeout(() => {
			console.log(elem);
		}, 10)
	})
}

printNumbers()
