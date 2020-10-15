//Calculates the amount of money Peter needs to buy everything. 
//Price of whiskey is in USD
//Price of rakia is half the price of whiskey
//Price of wine is 40% less than the price of rakia
//Price of beer is 80% less than the price of rakia

function main(priceOfWhiskeyPerL, amtOfBeer, amtOfWine, amtOfRakia, amtOfWhiskey) {

    var priceOfRakiaPerL = priceOfWhiskeyPerL / 2;
    var priceOfWinePerL = priceOfRakiaPerL - (priceOfRakiaPerL * 0.40);
    var priceOfBeerPerL = priceOfRakiaPerL - (priceOfRakiaPerL * 0.80);
    var whiskeyPrice = priceOfWhiskeyPerL * amtOfWhiskey;
    var beerPrice = priceOfBeerPerL * amtOfBeer;
    var winePrice = priceOfWinePerL * amtOfWine;
    var rakiaPrice = priceOfRakiaPerL * amtOfRakia;
    var amtNeeded = beerPrice + winePrice + rakiaPrice + whiskeyPrice;

    console.log(amtNeeded.toFixed(2));
}
main(50, 10, 3.5, 6.5, 1);