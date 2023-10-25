async function executeAll(array) {
	const promises = array.map((fn) => {
		return fn();
	});
	return await Promise.all(promises);
}
