const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function answer (line) {
	return line
		.split(" ")
		.reduce((acc, elem) => {
			if (acc[elem] !== undefined) {
				acc[elem] += 1;
			} else {
				acc[elem] = 1;
			}
			return acc;
		}, {});
}

rl.on('line', (line) => {
	console.log(answer(line));
});
