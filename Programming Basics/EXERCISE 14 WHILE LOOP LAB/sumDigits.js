function main(n) {
	let sum1 = 0;
	let sum2 = 0;
	let negSum = 0;

	while (n % 10 !== 0 && n < 0) {
		let neg = n % 10;
		negSum += Math.abs(neg);
		n = Math.floor(n / 10) + 1;
	}
	while (n !== 0 && n % 10 == 0) {
		let num1 = 0;
		sum1 += num1;
		n = n / 10;
	}
	while (n % 10 !== 0) {
		let num2 = n % 10;
		sum2 += num2;
		n = Math.floor(n / 10);
	}
	let sum = sum1 + sum2 + negSum;
	console.log(sum);
}
//main(5634);
//main(150);
main(-532);
