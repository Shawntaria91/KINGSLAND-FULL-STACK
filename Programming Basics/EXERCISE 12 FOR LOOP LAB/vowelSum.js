function main(n, characters) {
	let sum = 0;
	for (i = 0; i < n; i++) {
		let letter = characters.shift().toLowerCase();
		if (letter === "a") {
			sum++;
		} else if (letter === "e") {
			sum += 2; //sum = sum + 2;
		} else if (letter === "i") {
			sum += 3; //sum = sum + 3;
		} else if (letter === "o") {
			sum += 4;
		} else if (letter === "u") {
			sum += 5;
		}
	}
	console.log(sum);
}
main(3, ["i", "x", "u"]);
