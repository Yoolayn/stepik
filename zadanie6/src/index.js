const mapSQRT = (list) => {
	return list.reduce((acc, elem) => {
		acc.push(Math.sqrt(elem));
		return acc;
	}, []);
};
