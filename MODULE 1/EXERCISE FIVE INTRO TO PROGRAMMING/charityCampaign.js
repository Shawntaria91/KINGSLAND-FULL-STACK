//Calculates the total amount raised for charity.

function main(days, bakers, cakes, waffles, pancakes) {
    
    var cakeAmt = cakes * 45;
    var waffleAmt = waffles * 5.80;
    var pancakeAmt = pancakes * 3.20;
    var amtPerDay = (cakeAmt + waffleAmt + pancakeAmt) * bakers;
    var campaignAmt = amtPerDay * days;
    var costs = campaignAmt / 8;
    var amountRaised = campaignAmt - costs;

    console.log(amountRaised.toFixed(2));
}
main(20, 8, 14, 30, 16);

//cake - $45
//waffle - $5.80
//pancake - $3.20
//1/8 of final amount for costs