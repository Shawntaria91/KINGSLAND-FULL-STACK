function main(numOfPpl, entranceFee, sunbedPrice, umbrellaPrice) {
	let totalEntranceFee = numOfPpl * entranceFee;
	let totalSunbedPrice = Math.ceil(numOfPpl * 0.75) * sunbedPrice;
	let totalUmbrellaPrice = Math.ceil(numOfPpl * 0.5) * umbrellaPrice;
	let totalPrice = totalEntranceFee + totalSunbedPrice + totalUmbrellaPrice;
	console.log(`${totalPrice.toFixed(2)} dollars.`);
}
main(21, 5.5, 4.4, 6.2);
