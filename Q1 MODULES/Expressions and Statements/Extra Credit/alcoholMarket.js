//Calculates the amount of money Peter needs to buy everything.
//Price of whiskey is in USD
//Price of rakia is half the price of whiskey
//Price of wine is 40% less than the price of rakia
//Price of beer is 80% less than the price of rakia

function main(
	priceOfWhiskeyPerL,
	amtOfBeer,
	amtOfWine,
	amtOfRakia,
	amtOfWhiskey
) {
	let priceOfRakiaPerL = priceOfWhiskeyPerL / 2;
	let priceOfWinePerL = priceOfRakiaPerL - priceOfRakiaPerL * 0.4;
	let priceOfBeerPerL = priceOfRakiaPerL - priceOfRakiaPerL * 0.8;
	let whiskeyPrice = priceOfWhiskeyPerL * amtOfWhiskey;
	let beerPrice = priceOfBeerPerL * amtOfBeer;
	let winePrice = priceOfWinePerL * amtOfWine;
	let rakiaPrice = priceOfRakiaPerL * amtOfRakia;
	let amtNeeded = beerPrice + winePrice + rakiaPrice + whiskeyPrice;

	console.log(amtNeeded.toFixed(2));
}
main(50, 10, 3.5, 6.5, 1);
