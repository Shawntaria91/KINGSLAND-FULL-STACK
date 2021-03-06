function main(goal, price) {
	let payment = 0;
	let cashPayment = 0;
	let cardPayment = 0;
	let i = 1;
	let currentPrice = price.shift();
	let cashPerson = 0;
	let cardPerson = 0;

	while (currentPrice != undefined) {
		if (currentPrice === undefined) {
			break;
		} else if (i % 2 != 0) {
			if (currentPrice <= 100) {
				cashPayment += currentPrice;
				console.log("Product sold!");
				cashPerson++;
			} else if (currentPrice > 100) {
				console.log("Error in transaction!");
			}
		} else if (i % 2 == 0) {
			if (currentPrice >= 10) {
				cardPayment += currentPrice;
				console.log("Product sold!");
				cardPerson++;
			} else {
				console.log("Error in transaction!");
			}
		}
		i++;
		currentPrice = price.shift();
	}
	let avgCash = cashPayment / cashPerson;
	let avgCard = cardPayment / cardPerson;
	let totalCollected = cashPayment + cardPayment;

	if (totalCollected < goal) {
		console.log("Failed to collect required money for charity.");
	} else {
		console.log(`Average CS: ${avgCash.toFixed(2)}`);
		console.log(`Average CC: ${avgCard.toFixed(2)}`);
	}
}
main(500, [120, 8, 63, 256, 78, 317]);
