//calculates the profit of the club for the evening and if desired profit is reached
//price of the cocktail is the length of its name
//if the price of an order is an odd number, there is a 25% discount on the order price.

//Inputs
/**
 * 2 paramerters
 * -the desired profit of the club (1.00 - 15,000)
 * -An array of strings and numbers containing a pattern of the following
 * --name of the cocktail or command "Party!" - string
 * --number of cocktails for the order - a whole number (1-50)
 */

function main(desiredProfit, cocktailOrCommandAndNumOfCocktails) {
	let cocktailNameOrComm;
	let totalRevenue = 0;

	while (cocktailOrCommandAndNumOfCocktails !== undefined) {
		//let numOfCocktails = Number(cocktailOrCommandAndNumOfCocktails.shift());
		cocktailNameOrComm = cocktailOrCommandAndNumOfCocktails.shift();

		if (cocktailNameOrComm != "Party!" && totalRevenue < desiredProfit) {
			let numOfCocktails = Number(
				cocktailOrCommandAndNumOfCocktails.shift()
			);
			let cocktailPrice = cocktailNameOrComm.length;
			let tabTotal = numOfCocktails * cocktailPrice;

			if (tabTotal % 2 != 0) {
				tabTotal -= tabTotal * 0.25;
			}

			totalRevenue += tabTotal;
		} else if (
			cocktailNameOrComm == "Party!" &&
			totalRevenue < desiredProfit
		) {
			let moneyNeeded = (desiredProfit - totalRevenue).toFixed(2);
			console.log(`We need ${moneyNeeded} dollars more.`);
			console.log(`Club income - ${totalRevenue.toFixed(2)} dollars.`);
			break;
		} else if (totalRevenue >= desiredProfit) {
			console.log("Target acquired.");
			console.log(`Club income - ${totalRevenue.toFixed(2)} dollars.`);
			break;
		}
	}
}
main(100, ["Sidecar", 7, "Mojito", 5, "White Russian", 10]);
