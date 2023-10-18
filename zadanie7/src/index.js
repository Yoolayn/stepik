const answer = (users) => {
	return users.reduce((acc, elem) => {
		acc.push({
				[elem.name]: elem.likes,
				age: elem.name.length * 10
			});
		return acc;
	}, []);
};

const myUsers = [
    { name: "shark", likes: "ocean" },
    { name: "turtle", likes: "pond" },
    { name: "otter", likes: "fish biscuits" }
]

console.log(answer(myUsers));
