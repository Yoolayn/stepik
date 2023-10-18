const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const orbits = {
	"Merkury": 0.2408467,
	"Wenus": 0.61519726,
	"Ziemia": 1,
	"Mars": 1.8808158,
	"Jowisz": 11.862615,
	"Saturn": 29.447498,
	"Uran": 84.016846,
	"Neptun": 164.79132,
};

rl.on('line', (line) => {
	const seconds = parseInt(line);
	rl.on('line', (line, s = seconds) => {
		console.log((s / 31557600 / orbits[line]).toFixed(2));
	});
});
