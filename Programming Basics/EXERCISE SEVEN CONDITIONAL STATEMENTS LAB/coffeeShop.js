//Calculate the price for a drink
//coffee(1.00) or tea(.60)
//extra: sugar(.40) or no

// function main(drinkName, extra) {
//     let price = 0.00;
//     if (drinkName == "coffee") {
//        price = price + 1.00;
//     } else if (drinkName == "tea") {
//         price = price + 0.60;
//     }
//     if (extra == "sugar") {
//         price = price + 0.40;
//     }

//     console.log("Final Price: $"+price.toFixed(2));
// }
// main("coffee", "sugar");

function main(drink, extra) {
	let price = 0.0;

	if (drink == "coffee") {
		price += 1.0; //price = price + 1.00
	} else if (drink == "tea") {
		price += 0.6;
	}

	if (extra == "sugar") {
		price += 0.4;
	}

	console.log(`Final price: $${price.toFixed(2)}`); //temperate literal
	//console.log("Final price: $" + price.toFixed(2));
}
main("coffee", "sugar");
