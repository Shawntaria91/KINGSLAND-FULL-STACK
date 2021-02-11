function main(amtToConvert, inputCurr, outputCurr) {
	let convertedVal;
	if (inputCurr == "BGN") {
		if (outputCurr == "USD") {
			convertedVal = amtToConvert * 1.79549;
		} else if (outputCurr == "EUR") {
			convertedVal = amtToConvert * 1.95583;
		} else if (outputCurr == "GBP") {
			convertedVal = amtToConvert * 2.53405;
		} else {
			console.log(
				"You can only convert between BGN, USD, EUR, and GBP currencies."
			);
		}
	} else if (inputCurr == "USD") {
		if (outputCurr == "BGN") {
			convertedVal = amtToConvert / 1.79549;
		} else if (outputCurr == "EUR") {
			convertedVal = (amtToConvert / 1.79549) * 1.95583;
		} else if (outputCurr == "GBP") {
			convertedVal = (amtToConvert / 1.79549) * 2.53405;
		} else {
			console.log(
				"You can only convert between BGN, USD, EUR, and GBP currencies."
			);
		}
	} else if (inputCurr == "EUR") {
		if (outputCurr == "BGN") {
			convertedVal = amtToConvert / 1.95583;
		} else if (outputCurr == "USD") {
			convertedVal = (amtToConvert / 1.95583) * 1.79549;
		} else if (outputCurr == "GBP") {
			convertedVal = (amtToConvert / 1.95583) * 2.53405;
		} else {
			console.log(
				"You can only convert between BGN, USD, EUR, and GBP currencies."
			);
		}
	} else if (inputCurr == "GBP") {
		if (outputCurr == "BGN") {
			convertedVal = amtToConvert / 2.53405;
		} else if (outputCurr == "USD") {
			convertedVal = (amtToConvert / 2.53405) * 1.79549;
		} else if (outputCurr == "EUR") {
			convertedVal = (amtToConvert / 2.53405) * 2.53405;
		} else {
			console.log(
				"You can only convert between BGN, USD, EUR, and GBP currencies."
			);
		}
	} else {
		console.log(
			"You can only convert between BGN, USD, EUR, and GBP currencies."
		);
	}
	let roundedVal = convertedVal.toFixed(2);
	console.log(`${roundedVal} ${outputCurr}`);
}

main(100, "BGN", "EUR");
