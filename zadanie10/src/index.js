const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function answer(list, start, stop, search) {
	if (start > stop) {
		console.log("Brak elementu w ciągu!!!");
		return;
	}
	const q = (start + stop) / 2;
	if (list[q] === search) {
		console.log(q);
	} else if (list[q] > search) {
		answer(list, start, q - 1, search);
	} else {
		answer(list, q + 1, stop, search);
	}
}

rl.on('line', (line) => {
	const n = line.split(" ").map((elem) => {
		return Number(elem);
	});
	rl.on('line', (search, nums = n) => {
		answer(nums, 0, nums.length, Number(search));
		});
	});
