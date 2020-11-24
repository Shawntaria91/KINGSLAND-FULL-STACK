function main(numOfPpl, entranceFee, sunbedPrice, umbrellaPrice  ) {
    let totalEntranceFee = numOfPpl * entranceFee;
    let totalSunbedPrice = Math.ceil((numOfPpl * 0.75)) * sunbedPrice;
    let totalUmbrellaPrice = Math.ceil((numOfPpl * 0.50)) * umbrellaPrice;
    let totalPrice = totalEntranceFee + totalSunbedPrice + totalUmbrellaPrice;
    console.log(`${totalPrice.toFixed(2)} dollars.`);
}
main(21, 5.50, 4.40, 6.20);


/**
 * It is hot and sunny outside, so your boss decides to organize a workday by the swimming pool. Your
task is to write a program that calculates the amount that should be paid for the event. An entrance
fee must be paid for by every single person. You should keep in mind that an umbrella is
enough for two people. It is known that only 75% of the team wants sunbeds. In the calculation of
the number of umbrellas and sunbeds, their number should be rounded up to the nearest
integer number. 
 */