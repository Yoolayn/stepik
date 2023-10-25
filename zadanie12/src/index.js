function asyncDivide(num1, num2) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (num2 !== 0) {
				resolve(num1 / num2);
			} else {
				reject("Nie można dzielić przez zero");
			}
		}, 1000);
	});
}
