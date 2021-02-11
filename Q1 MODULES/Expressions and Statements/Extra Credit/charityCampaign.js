function main(days, bakers, cakes, waffles, pancakes) {
	let cakeAmt = cakes * 45;
	let waffleAmt = waffles * 5.8;
	let pancakeAmt = pancakes * 3.2;
	let amtPerDay = (cakeAmt + waffleAmt + pancakeAmt) * bakers;
	let campaignAmt = amtPerDay * days;
	let costs = campaignAmt / 8;
	let amountRaised = campaignAmt - costs;

	console.log(amountRaised.toFixed(2));
}
main(20, 8, 14, 30, 16);
