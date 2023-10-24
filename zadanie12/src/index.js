function asyncDivide(num1, num2) {
	setTimeout(() => {
		if (num2 === 0) {
			console.log("Nie można dzielić przez zero");
		} else {
			console.log(num1 / num2);
		}
	}, 1000)
}

