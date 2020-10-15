function main (month, numNights) {
    var studioPrice = 0.00;
    var apartmentPrice = 0.00;

    if ((month == "May") || (month == "October")) {

        studioPrice = 50 * numNights; 
                if ((numNights > 7) && (numNights <= 14)) {
                    studioPrice = studioPrice - (studioPrice * 0.05);
                } else if (numNights > 14) {
                    studioPrice = studioPrice - (studioPrice * 0.30);
                }
        apartmentPrice = 65 * numNights;
    } else if ((month == "June") || (month == "September")) {

        studioPrice = 75.20 * numNights; {
                if (numNights > 14) {
                    studioPrice = studioPrice - (studioPrice * 0.20);
                }
        apartmentPrice = 68.70 * numNights;

    }
    } else if ((month == "July") || (month == "August")) {

        studioPrice = 76 * numNights;
        apartmentPrice = 77 * numNights;
    } else {
        console.log("Choose a different month.");
    }

    if (numNights > 14) {
        apartmentPrice = apartmentPrice - (apartmentPrice * 0.10);
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
main("August", 63);