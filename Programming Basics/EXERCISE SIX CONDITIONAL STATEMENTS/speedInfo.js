/*Reads a floating point number, reps speed and prints info about it
If speed is <= 10, print Slow
If speed is > 10 and speed is <= 50, print average
If speed is > 50 and speed is <= 150, print fast
If speed is > 150 and speed is <= 1000, print ultra fast
If speed is > 1000, print extremely fast*/

function main(speed) {

    if (speed <= 10) {
        console.log("slow");
    } else if ((speed > 10) && (speed <= 50)) {
        console.log("average");
    } else if ((speed > 50) && (speed <= 150)) {
        console.log("fast");
    } else if ((speed > 150) && (speed <= 1000)) {
        console.log("ultra fast");
    } else if (speed > 1000) {
        console.log("extremely fast");
    } else {}
}
main(160);
//8
//49.5
//126
//160
//3500