// Write function that:

// Records a car number for every car that enters the parking lot

// Removes a car number when the car goes out

// Input will be array of strings in format [direction, carNumber]

// Print the output with all car numbers which are in the parking lot sorted in ascending by number.

// Print “Parking Lot is Empty” if empty



function main(directionAndCarNum) {

    parkingLotList(directionAndCarNum);

}



function parkingLotList(directionAndCarNum) {

    let carDataRow = new Map();

    for (let carInfo of directionAndCarNum) {

    let [direction, carNum] = carInfo.split(', ');
    carDataRow.set(carNum, direction);
    }

    let carsGoingOutList = [];

    for (let [carNumber, direction] of carDataRow) {

        if (direction == 'IN') {
            carsGoingOutList.push(carNumber);
        }
    }

    carsGoingOutList.sort((a, b) => a.substring(2).localeCompare(b.substring(2)));
    console.log((carsGoingOutList[0] == undefined) ? `Parking Lot is Empty` : carsGoingOutList.join(`\n`));
}

main(["IN, GC2844AA",
"IN, CA1234TA", 
"OUT, CA1234TA", "IN, DA9999TT",
"IN, CF2866HI", 
"OUT, DA9999TT", "IN, RS2844AA",
"OUT, GC2844AA", 
"IN, BN9876HH"]);