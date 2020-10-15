function main(restTime, pricePerHardware, pricePerSoftware, frappePrice) {
    var minHard = 3 * 2;
    var minSoft = 2 * 2;
    var timeSpent = 5 + minHard + minSoft;
    var remainingTime = restTime - timeSpent;
    var moneySpent = (pricePerHardware * 3) + (pricePerSoftware * 2) + frappePrice;
    console.log(moneySpent.toFixed(2));
    console.log(remainingTime);
}
main(20, 2, 4, 3);