const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
	console.log(line.split(' ').reduce((acc, elem) => {
		return acc + parseInt(elem);
	}, 0));
});
