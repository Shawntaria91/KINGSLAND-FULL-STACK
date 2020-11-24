function main(budget, season) {
    var destination = "";
    var holidayType = "";
    var amountSpent = 0.00;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season == "summer") {
            holidayType = "Camp";
            amountSpent = budget * 0.30;
        } else if (season == "winter") {
            holidayType = "Hotel";
            amountSpent = budget * 0.70;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season == "summer") {
            holidayType = "Camp";
            amountSpent = budget * 0.40;
        } else if (season == "winter") {
            holidayType = "Hotel";
            amountSpent = budget * 0.80;
        }
    } else if (budget > 1000) {
        destination = "Europe";
        holidayType = "Hotel";
        amountSpent = budget * 0.90;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${holidayType} - ${amountSpent.toFixed(2)}`);
}
main(50, "summer");