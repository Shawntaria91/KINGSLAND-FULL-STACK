//Currency Converter for Extra Credit
function main(amount, input, output) {
    var convertedAmt = 0.00;
    if (input == "USD") {
        if (output == "BGN") {
            convertedAmt = amount * (1 / 1.79549);

            console.log(convertedAmt.toFixed((2)) + " " + output);
        } else if (output == "EUR") {
            convertedAmt = amount * ((1 / 1.79549) * 1.95583);
            console.log(convertedAmt.toFixed((2)) + " " + output);
        } else if (output == "GBP") {
            convertedAmt = amount * ((1 / 1.79549) * 2.53405);
            console.log(convertedAmt.toFixed((2)) + " " + output);
        } else {
            console.log("Already in desired currency");
        }
    } else if (input == "BGN") {
        if (output == "USD") {
            convertedAmt = amount * 1.79549;

            console.log(convertedAmt.toFixed((2)) + " " + output);
        } else if (output == "EUR") {
            convertedAmt = amount * 1.95583;
            console.log(convertedAmt.toFixed((2)) + " " + output);
        } else if (output == "GBP") {
            convertedAmt = amount * 2.53405;
            console.log(convertedAmt.toFixed((2)) + " " + output);
        } else {
            console.log("Please choose a different currency");
        }
    } else if (input == "EUR") {
        if (output == "USD") {
            convertedAmt = amount * (1 / 1.95583) * 1.79549;

            console.log(convertedAmt.toFixed((2)) + " " + output);
        } else if (output == "BGN") {
            convertedAmt = amount * (1 / 1.95583);
            console.log(convertedAmt.toFixed((2)) + " " + output);
        } else if (output == "GBP") {
            convertedAmt = amount * (1 / 1.95583) * 2.53405;
            console.log(convertedAmt.toFixed((2)) + " " + output);
        } else {
            console.log("Please choose a different currency");
        }
    } else if (input == "GBP") {
        if (output == "USD") {
            convertedAmt = amount * (1 / 2.53405) * 1.79549;

            console.log(convertedAmt.toFixed((2)) + " " + output);
        } else if (output == "BGN") {
            convertedAmt = amount * (1 / 2.53405);
            console.log(convertedAmt.toFixed((2)) + " " + output);
        } else if (output == "EUR") {
            convertedAmt = amount * (1 / 2.53405) * 1.95583;
            console.log(convertedAmt.toFixed((2)) + " " + output);
        } else {
            console.log("Please choose a different currency");
        }
    } else {
        console.log("Please choose one of the following currencies: USD, BGN, EUR, GBP");
    }

}
main(12.35, "GBP", "BGN");