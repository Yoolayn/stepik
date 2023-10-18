const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const leftPad = (toPad, amount, padChar = " ") => {
	const padding = new Array(amount + 1).join(padChar);
	return padding + toPad;
};

const genStr = (amount, character) => {
	return new Array(amount + 1).join(character);
};

function numCheck(n) {
    let n1 = Math.abs(n);
    let n2 = parseInt(n, 10);
    return !isNaN(n1) && n2 === n1 && n1.toString() === n;
};

rl.on('line', (line) => {
	if (numCheck(line)) {
		const number = parseInt(line);
		const nums = Array.from({length: number}, (_, i) => i + 1);
		const numsRev = nums.slice().reverse();
		nums.map((elem) => {
			console.log(genStr(elem, "*"));
		});
		numsRev.map((elem) => {
			console.log(genStr(elem, "*"));
		});
		numsRev.map((elem, index) => {
			console.log(leftPad(genStr(elem, "*"), index));
		});
		numsRev.map((elem, index) => {
			console.log(leftPad(genStr(index + 1, "*"), elem - 1));
		});
	}
});

