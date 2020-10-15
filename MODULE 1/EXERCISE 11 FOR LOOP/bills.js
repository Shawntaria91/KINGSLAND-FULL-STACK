function calcCost(months, bill) {
    var electricity = 0.00;
    var water = months * 20.00;
    var internet = months * 15.00;

    for (i = 1; i <= months; ++i) {
        electricity += bill.shift();
    }
    var other = (electricity + water + internet) + ((electricity + water + internet) * 0.20);
    var avgCost = (electricity + water + internet + other) / months;
    console.log(`Electricity: ${electricity.toFixed(2)} $`);
    console.log(`Water: ${water.toFixed(2)} $`);
    console.log(`Internet: ${internet.toFixed(2)} $`);
    console.log(`Other: ${other.toFixed(2)} $`);
    console.log(`Average: ${avgCost.toFixed(2)} $`);
}
calcCost(5, [68.63, 89.25, 132.53, 93.53, 63.22]);