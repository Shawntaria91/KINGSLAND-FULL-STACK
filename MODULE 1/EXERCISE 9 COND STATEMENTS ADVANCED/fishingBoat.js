function main(budget, season, numFishermen) {
    var price = 0.00;
    if (season == "Spring") {
        price = 3000;
    } else if ((season == "Summer") || (season == "Autumn")) {
        price = 4200;
    } else if (season == "Winter") {
        price = 2600;
    }
    
    if (numFishermen <= 6) {
        price = price - (price * 0.10);
    } else if ((numFishermen >= 7) && (numFishermen <= 11)) {
        price = price - (price * 0.15);
    } else if (numFishermen >= 12) {
        price = price - (price * 0.25);
    }  

    if ((numFishermen % 2 == 0) && (season != "Autumn")) {
        price = price - (price * 0.05);
    }
    
    var moneyLeft = budget - price;
    var moneyNeeded = price - budget;
    if (price > budget) {
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    } else {
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    }
}
main(3000, "Summer", 11);