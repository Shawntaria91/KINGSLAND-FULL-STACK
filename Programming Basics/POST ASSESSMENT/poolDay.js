function main(numOfPpl, entranceFee, sunbedPrice, umbrellaPrice) {
	let totalEntranceFee = numOfPpl * entranceFee;
	let totalSunbedPrice = Math.ceil(numOfPpl * 0.75) * sunbedPrice;
	let totalUmbrellaPrice = Math.ceil(numOfPpl * 0.5) * umbrellaPrice;
	let totalPrice = totalEntranceFee + totalSunbedPrice + totalUmbrellaPrice;
	console.log(`${totalPrice.toFixed(2)} dollars.`);
}
main(21, 5.5, 4.4, 6.2);

/**
 * It is hot and sunny outside, so your boss decides to organize a workday by the swimming pool. Your
task is to write a program that calculates the amount that should be paid for the event. 
//I need to find out the total price for this event
An entrance fee must be paid for by every single person. 
//let totalFee = entranceFee * numOfPpl;
You should keep in mind that an umbrella is enough for two people. 
//umbrella enough for 2 ppl.
*** let totalUmbrealla = (numOfPpl * 0.5) * umbrellaPrice 
It is known that only 75% of the team wants sunbeds. 
//75% of us want sunbeds.
*** let sunBedTotal = (numOfPpl * 0.75) * sunbedPrice
In the calculation of the number of umbrellas and sunbeds, their number should be rounded up to the nearest
integer number.
Math.ceil(); 
 */

// function main(dec) {
// 	let roundUp = dec / 10;
// 	console.log(roundUp);
// 	let finalRoundUp = roundUp + (1 - roundUp);
// 	console.log(finalRoundUp);
// }
// main(2.3);
