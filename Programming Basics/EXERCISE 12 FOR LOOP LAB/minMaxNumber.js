function main(n, numArray) {
	let minNum = numArray[0];
	let maxNum = numArray[0];
	for (let i = 0; i < n; i++) {
		let currentNum = numArray.shift();

		if (currentNum > maxNum) {
			maxNum = currentNum;
		} else if (currentNum < minNum) {
			minNum = currentNum;
		}
	}
	console.log("Min number: " + minNum);
	console.log("Max number: " + maxNum);
}
main(3, [10, 350, 50]);
