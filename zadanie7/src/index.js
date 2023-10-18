const answer = (users) => {
	return users.reduce((acc, elem) => {
		acc.push({
				[elem.name]: elem.likes,
				age: elem.name * 10
			});
		return acc;
	}, []);
};
