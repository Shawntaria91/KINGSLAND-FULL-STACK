function main(drink, sugar, numOfDrinks) {
	let drinkPrice = 0;
	for (let i = 1; i <= numOfDrinks; i++) {
		if (drink == "Espresso") {
			if (sugar == "Without") {
				drinkPrice += 0.9;
			} else if (sugar == "Normal") {
				drinkPrice += 1.0;
			} else if (sugar == "Extra") {
				drinkPrice += 1.2;
			}
		} else if (drink == "Cappuccino") {
			if (sugar == "Without") {
				drinkPrice += 1.0;
			} else if (sugar == "Normal") {
				drinkPrice += 1.2;
			} else if (sugar == "Extra") {
				drinkPrice += 1.6;
			}
		} else if (drink == "Tea") {
			if (sugar == "Without") {
				drinkPrice += 0.5;
			} else if (sugar == "Normal") {
				drinkPrice += 0.6;
			} else if (sugar == "Extra") {
				drinkPrice += 0.7;
			}
		}
	}

	if (sugar == "Without") {
		drinkPrice = drinkPrice - drinkPrice * 0.35;
		//drinkPrice -= drinkPrice * 0.35;
	}

	if (numOfDrinks >= 5 && drink == "Espresso") {
		drinkPrice = drinkPrice - drinkPrice * 0.25;
		//drinkPrice -= drinkPricePrice * 0.25;
	}
	let finalPrice = 0;
	if (drinkPrice > 15.0) {
		finalPrice = drinkPrice - drinkPrice * 0.2;
	} else {
		finalPrice = drinkPrice;
	}
	console.log(
		`You bought ${numOfDrinks} cups of ${drink} for ${finalPrice.toFixed(
			2
		)} dollars.`
	);
}
main("Tea", "Extra", 3);

/**
 * machine.
Without sugar Normal Extra sugar
Espresso $0.90 $1 $1.20
Cappuccino $1.00 $1.20 $1.60
Tea $0.50 $0.60 $0.70
Keep in mind the following discounts:
• When selecting a drink without sugar, there is a 35% discount.
*** if (sugar == "Without") {finalprice -= finalPrice * 0.35 } ***
• When "Espresso" is selected if at least 5 drinks have already been purchased, there is a 25%
discount.
*** if (drink == "Espresso" && numOfDrinks >= 5) {finalprice -= finalPrice * 0.25 } ***
• When the amount exceeds $15, 20% discount from the final price.
The discounts are applied in the order of their description.
One string:
"You bought {count drinks} cups of {drink} for {total price} dollars."
The price must be formatted to the second digit after the decimal point.
 */
