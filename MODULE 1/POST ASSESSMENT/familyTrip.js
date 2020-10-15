function main(budget, numOfNights, pricePerNight, extraCostPercentage) {

    let extraCost = budget * (extraCostPercentage / 100);
    if (numOfNights > 7) {
        pricePerNight -= (pricePerNight * 0.05);
    }

    let tripCost = extraCost + (numOfNights * pricePerNight);

    if (tripCost <= budget) {
        let moneyLeft = budget - tripCost;
        console.log(`The Smiths will be left with ${moneyLeft.toFixed(2)} dollars after vacation.`);
    } else {
        let moneyNeeded = tripCost - budget;
        console.log(`${moneyNeeded.toFixed(2)} dollars needed.`);
    }

}
main(800.50, 8, 100, 2);



/**
 * The Smiths are planning their family trip. Your task is to write a program
 *  that calculates whether their budget will be enough for their trip. Knowing, 
 * how many nights they have planned for their trip, the price per night and 
 * the percent of the budget that has been provided for additional costs. 
 * Keep in mind that if the number of nights is greater than 7, 
 * the price per night is reduced by 5%. 
 */