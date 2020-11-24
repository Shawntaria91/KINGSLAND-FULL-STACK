function main(distance, passengers, price) {

    let fuelNeeded = (distance / 100) * 7;
    fuelNeeded += passengers * 0.100;
    let money = fuelNeeded * price;
    console.log(`Needed money for that trip is ${money}lv.`);
}
main(260, 9, 2.49);