const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const answer = (line) => {
	return line
		.split(" ")
		.reduce((acc, elem) => {
			if (Number.isInteger(Number(elem))) {
				acc.push(Number(elem));
			}
			return acc;
		}, [])
		.map((elem) => {
			return elem * elem;
		});
};

rl.on('line', (line) => {
	console.log(answer(line).map((elem) => {
		return parseFloat(elem).toFixed(2);
	}));
});
