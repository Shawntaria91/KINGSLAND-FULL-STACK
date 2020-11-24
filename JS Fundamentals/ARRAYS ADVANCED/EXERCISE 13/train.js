// given  an array - stringss of wagons
// first element -  number of passengers in a wagon
// second element - max capacity of each wagon
// remaining elements will be commands:
// Add {passengrs} means add a wagon to the end with the given number of passengers
// {passengers} means find an existing wagon to fit all the passengers starting from the front. 
// print the final state of the train - separate the wagons by a space 

function main(wagons) {

    let newWagon = wagons.shift().split(' ').map(Number); //shifts passengerArray to newWagonArray, turns into new array and converts to number
    let maxCap = wagons.shift();
    let add = false;
    let passengers = 0;
    let passengerArr = wagons.toString().split(' ').toString().split(",");
    for (let i = 0; i < passengerArr.length; i++) {
        if (add == true) {
            newWagon.push(Number(passengerArr[i]));
        }
        if ((passengerArr[i] != "Add") && (add == false)) { //if item comes in as a number, update newWagonArray by adding passengers.
            passengers = Number(passengerArr[i]);
            for (let j = 0; j < newWagon.length; j++) {
                if ((passengers + newWagon[j]) <= maxCap) {
                    let total = passengers + newWagon[j];
                    newWagon.splice(j, 1, total);
                    break;
                }
            }
        }
        add = false;
        if (passengerArr[i] == "Add") {
            add = true;
        }
    }
    console.log(newWagon.join(" "));
}
main(["32 54 21 12 4 0 23", "75", 'Add 10', "Add 0", "30", "10", "75"]);