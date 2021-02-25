function main(flower, numFlowers, budget) {
	var price = 0.0;

	if (flower == "Roses") {
		price = numFlowers * 5;
		if (numFlowers > 80) {
			price = price - price * 0.1;
		} else {
		}
	} else if (flower == "Dahlias") {
		price = numFlowers * 3.8;
		if (numFlowers > 90) {
			price = price - price * 0.15;
		} else {
		}
	} else if (flower == "Tulips") {
		price = numFlowers * 2.8;
		if (numFlowers > 80) {
			price = price - price * 0.15;
		} else {
		}
	} else if (flower == "Narcissus") {
		price = numFlowers * 3;
		if (numFlowers < 120) {
			price = price + price * 0.15;
		} else {
		}
	} else if (flower == "Gladiolus") {
		price = numFlowers * 2.5;
		if (numFlowers < 80) {
			price = price + price * 0.2;
		} else {
		}
	}

	var moneyLeft = budget - price;
	var moneyNeeded = price - budget;
	if (price > budget) {
		console.log(
			`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`
		);
	} else {
		console.log(
			`Hey, you have a great garden with ${numFlowers} ${flower} and ${moneyLeft.toFixed(
				2
			)} leva left.`
		);
	}
}
main("Roses", 79, 1002);
