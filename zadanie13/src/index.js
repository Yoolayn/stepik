function changeCase(text) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(text.toUpperCase());
		}, 1000);
	});
}
