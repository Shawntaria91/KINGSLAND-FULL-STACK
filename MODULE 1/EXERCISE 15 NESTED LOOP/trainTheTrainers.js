function main(juryCount, preziNameAndRatings) {
    let currentPrezi = "";
    let ratingsSum = 0;
    let totalRatings = 0;
    let avg = 0;
    let totalAvg = 0;
    let cursor = 0;
    currentPrezi = preziNameAndRatings.shift();
    while (currentPrezi != "Finish" && currentPrezi != undefined) {
        for (i = 0; i < juryCount; i++) {
            ratingsSum += Number(preziNameAndRatings.shift());
            cursor++;
        }
        avg = ratingsSum / juryCount;
        console.log(`${currentPrezi} - ${avg.toFixed(2)}.`);
        currentPrezi = preziNameAndRatings.shift();
        totalRatings += ratingsSum;
        ratingsSum = 0;
    }
    totalAvg = totalRatings / cursor;
    console.log(`Student's final assessment is ${totalAvg.toFixed(2)}.`);
}
main(2, ["While-Loop", 6.00, 5.50, "For-Loop", 5.84, 5.66, "Finish"]);