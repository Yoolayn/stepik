const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function binarySearch (list, start, stop, search) {
	if (start > stop) {
		return "Brak elementu w ciągu!!!";
	}
	q = Math.floor(start + stop / 2);
	if (list[q] === search) {
		return q;
	} else if (list[q] > search) {
		return binarySearch(list, start, q - 1, search);
	} else if (list[q] < search) {
		return binarySearch(list, q + 1, stop, search);
	}
}

function answer (line, search) {
	const nums = line.split(" ").map((elem) => {
		return Number(elem);
	});
	return binarySearch(nums, 0, nums.length - 1, Number(search));
}

rl.on('line', (line) => {
	rl.on('line', (search) => {
		console.log(answer(line, search));
	});
});
