function main(capacity, minAge, numOfPeople, riders) {
    var validRiders = 0;
    for (i = 0; i < numOfPeople; i++) {
        
        if (riders[i] >= minAge) {
            validRiders++; 
        }       
    }

    if (validRiders >= capacity) {
        console.log("The rollercoaster departures");
    } else {
        console.log("Waiting...");
    }
}
main(2, 10, 3, [15, 12, 8]);