function main(numBottles, kitchenware) {
	let detergent = 750 * numBottles;
	let soapUsed = 0;
	let currentDish = 0;
	let cleanPlates = 0;
	let cleanPots = 0;
	let remainingDetergent = detergent - soapUsed;
	let i = 0;
	while (soapUsed < remainingDetergent && currentDish !== "End") {
		if (i <= kitchenware.length) {
			currentDish = kitchenware[i];
			if ((i + 1) % 3 == 0) {
				cleanPots += Number(currentDish);
				soapUsed += Number(currentDish) * 15;
				remainingDetergent = detergent - soapUsed;
			} else {
				cleanPlates += Number(currentDish);
				soapUsed += Number(currentDish) * 5;
				remainingDetergent = detergent - soapUsed;
			}
			i++;
			currentDish = kitchenware[i];
		}
	}
	let required = soapUsed - detergent;
	if (soapUsed <= detergent && currentDish == "End") {
		console.log(`Detergent was enough!`);
	}

	console.log(`${cleanPlates} plates and ${cleanPots} pots were washed.`);

	if (soapUsed <= detergent && currentDish == "End") {
		console.log(`Leftover detergent ${remainingDetergent} ml`);
	}

	if (soapUsed > detergent && currentDish !== "End") {
		console.log(`Not enough detergent, ${required} ml more necessary!`);
	}
}
main(2, [53, 65, 55, "End"]);
