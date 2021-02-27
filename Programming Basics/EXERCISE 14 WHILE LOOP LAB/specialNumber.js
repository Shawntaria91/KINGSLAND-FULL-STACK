function main(num) {
	let digits = num;
	let special = true;
	while (digits > 0) {
		let d = digits % 10;
		digits = Math.floor(digits / 10);

		if (d == 0) {
			special = true;
		} else if (num % d != 0) {
			special = false;
			console.log(`${num} is not special`);
			break;
		} else {
			special = true;
		}
	}
	if (special == true) {
		console.log(`${num} is special`);
	}
}
//main(204);
//main(724);
main(23);
