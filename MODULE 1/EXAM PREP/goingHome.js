function main(distance, gasPerHundredKilos, pricePerLiter, moneyWon) {
    var liters = distance * (gasPerHundredKilos / 100);
    var totalCost = liters * pricePerLiter;
    var moneyAvailable = moneyWon - totalCost;

    if (totalCost <= moneyWon) {
        console.log(`You can go home. ${moneyAvailable.toFixed(2)} money left.`);
    } else {
        var split = moneyWon / 5;
        console.log(`Sorry, you cannot go home. Each will receive ${split.toFixed(2)} money.`);
    }
}
main(100, 8, 1.2, 20);