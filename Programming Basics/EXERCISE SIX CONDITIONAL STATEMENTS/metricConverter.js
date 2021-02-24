//converts between the following 8 measuring units
//m, mm, cm, mi, in, km, ft, yd
//input: num to convert(num), input(text), output(text)
//result to 10 decimal places
//1m - 1000mm; 1m - 100cm; 1m - 0.000621371192 mi; 1m - 39.3700787 in;
//1m - 0.001 km; 1m - 3.2808399 ft; 1m - 1.0936133 yd;

function main(num, input, output) {
	var convertedUnit = 0.0;
	if (input == "m") {
		if (output == "mm") {
			convertedUnit = num * 1000;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "cm") {
			convertedUnit = num * 100;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "mi") {
			convertedUnit = num * 0.000621371192;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "in") {
			convertedUnit = num * 39.3700787;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "km") {
			convertedUnit = num * 0.001;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "ft") {
			convertedUnit = num * 3.2808399;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "yd") {
			convertedUnit = num * 1.0936133;
			console.log(convertedUnit.toFixed(10));
		} else {
			console.log(num.toFixed(10));
		}
	} else if (input == "mm") {
		if (output == "m") {
			convertedUnit = num * (1 / 1000);
			console.log(convertedUnit.toFixed(10));
		} else if (output == "cm") {
			convertedUnit = num * (1 / 1000) * 100;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "mi") {
			convertedUnit = num * (1 / 1000) * 0.000621371192;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "in") {
			convertedUnit = num * (1 / 1000) * 39.3700787;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "km") {
			convertedUnit = num * (1 / 1000) * 0.001;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "ft") {
			convertedUnit = num * (1 / 1000) * 3.2808399;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "yd") {
			convertedUnit = num * (1 / 1000) * 1.0936133;
			console.log(convertedUnit.toFixed(10));
		} else {
			console.log(num.toFixed(10));
		}
	} else if (input == "cm") {
		if (output == "mm") {
			convertedUnit = num * (1 / 100) * 1000;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "m") {
			convertedUnit = num * (1 / 100);
			console.log(convertedUnit.toFixed(10));
		} else if (output == "mi") {
			convertedUnit = num * (1 / 100) * 0.000621371192;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "in") {
			convertedUnit = num * (1 / 100) * 39.3700787;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "km") {
			convertedUnit = num * (1 / 100) * 0.001;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "ft") {
			convertedUnit = num * (1 / 100) * 3.2808399;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "yd") {
			convertedUnit = num * (1 / 100) * 1.0936133;
			console.log(convertedUnit.toFixed(10));
		} else {
			console.log(num.toFixed(10));
		}
	} else if (input == "mi") {
		if (output == "mm") {
			convertedUnit = num * (1 / 0.000621371192) * 1000;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "cm") {
			convertedUnit = num * (1 / 0.000621371192) * 100;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "m") {
			convertedUnit = num * (1 / 0.000621371192);
			console.log(convertedUnit.toFixed(10));
		} else if (output == "in") {
			convertedUnit = num * (1 / 0.000621371192) * 39.3700787;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "km") {
			convertedUnit = num * (1 / 0.000621371192) * 0.001;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "ft") {
			convertedUnit = num * (1 / 0.000621371192) * 3.2808399;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "yd") {
			convertedUnit = num * (1 / 0.000621371192) * 1.0936133;
			console.log(convertedUnit.toFixed(10));
		} else {
			console.log(num.toFixed(10));
		}
	} else if (input == "in") {
		if (output == "mm") {
			convertedUnit = num * (1 / 39.3700787) * 1000;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "cm") {
			convertedUnit = num * (1 / 39.3700787) * 100;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "m") {
			convertedUnit = num * (1 / 39.3700787);
			console.log(convertedUnit.toFixed(10));
		} else if (output == "mi") {
			convertedUnit = num * (1 / 39.3700787) * 0.000621371192;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "km") {
			convertedUnit = num * (1 / 39.3700787) * 0.001;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "ft") {
			convertedUnit = num * (1 / 39.3700787) * 3.2808399;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "yd") {
			convertedUnit = num * (1 / 39.3700787) * 1.0936133;
			console.log(convertedUnit.toFixed(10));
		} else {
			console.log(num.toFixed(10));
		}
	} else if (input == "km") {
		if (output == "mm") {
			convertedUnit = num * (1 / 0.001) * 1000;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "cm") {
			convertedUnit = num * (1 / 0.001) * 100;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "mi") {
			convertedUnit = num * (1 / 0.001) * 0.000621371192;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "in") {
			convertedUnit = num * (1 / 0.001) * 39.3700787;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "m") {
			convertedUnit = num * (1 / 0.001);
			console.log(convertedUnit.toFixed(10));
		} else if (output == "ft") {
			convertedUnit = num * (1 / 0.001) * 3.2808399;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "yd") {
			convertedUnit = num * (1 / 0.001) * 1.0936133;
			console.log(convertedUnit.toFixed(10));
		} else {
			console.log(num.toFixed(10));
		}
	} else if (input == "ft") {
		if (output == "mm") {
			convertedUnit = num * (1 / 3.2808399) * 1000;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "cm") {
			convertedUnit = num * (1 / 3.2808399) * 100;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "mi") {
			convertedUnit = num * (1 / 3.2808399) * 0.000621371192;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "in") {
			convertedUnit = num * (1 / 3.2808399) * 39.3700787;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "km") {
			convertedUnit = num * (1 / 3.2808399) * 0.001;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "m") {
			convertedUnit = num * (1 / 3.2808399);
			console.log(convertedUnit.toFixed(10));
		} else if (output == "yd") {
			convertedUnit = num * (1 / 3.2808399) * 1.0936133;
			console.log(convertedUnit.toFixed(10));
		} else {
			console.log(num.toFixed(10));
		}
	} else if (input == "yd") {
		if (output == "mm") {
			convertedUnit = num * (1 / 1.0936133) * 1000;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "cm") {
			convertedUnit = num * (1 / 1.0936133) * 100;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "mi") {
			convertedUnit = num * (1 / 1.0936133) * 0.000621371192;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "in") {
			convertedUnit = num * (1 / 1.0936133) * 39.3700787;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "km") {
			convertedUnit = num * (1 / 1.0936133) * 0.001;
			console.log(convertedUnit.toFixed(10));
		} else if (output == "m") {
			convertedUnit = num * (1 / 1.0936133);
			console.log(convertedUnit.toFixed(10));
		} else if (output == "ft") {
			convertedUnit = num * (1 / 1.0936133) * 3.2808399;
			console.log(convertedUnit.toFixed(10));
		} else {
			console.log(num.toFixed(10));
		}
	} else {
		console.log(
			"Please choose one of the following currencies: m, mm, cm, mi, in, km ft, yd"
		);
	}
}
main(94308, "km", "mm");
