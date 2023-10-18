const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
	const num = parseInt(line);
	const armstrong = line.split('').reduce((acc, elem) => {
		const toNum = parseInt(elem);
		return acc + toNum ** line.length;
	}, 0);
	console.log(num === armstrong);
});
