function main(n, intArray) {
	let firstSum = 0;
	let secondSum = 0;
	let sum = 0;

	for (let i = 0; i < n; i++) {
		sum = intArray.shift();
		firstSum = firstSum += sum;
	}

	for (let j = 0; j < n; j++) {
		sum = intArray.shift();
		secondSum = secondSum += sum;
	}

	if (firstSum == secondSum) {
		console.log(`Yes, value=${secondSum}`);
	} else {
		let diff = firstSum - secondSum;
		console.log(`No, maxdiff=${diff}`);
	}
}
main(2, [-1, 0, 0, -1]);
main(2, [5, 6, 3, 7]);
