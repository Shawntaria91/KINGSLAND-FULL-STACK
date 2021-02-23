function main(n, arrayNum) {
	let sum = 0;

	for (let i = 0; i < n; i++) {
		let number = arrayNum[i];
		if (i % 2 === 0) {
			sum += number;
		} else {
			sum -= number;
		}
	}
	console.log(sum);
}
main(2, [10, -20]);
