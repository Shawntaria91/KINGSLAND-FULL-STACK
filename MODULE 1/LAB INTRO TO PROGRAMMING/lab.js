console.log("Print Hello JavaScript");
console.log("Hello JavaScript");

console.log("Calculate and Print 5 * 5");
console.log(5*5);

console.log("Print Name and Expression");
console.log("Maria");
console.log(5+3);

console.log("Print Calculations");
console.log(5 + 3 * 2);
console.log(4 * (2 + 3));
console.log((2 + 5) * (8 - 2) / 7);

console.log("Print a Square of 7 * 7 Stars");
for (i = 0; i < 7; i++) {
    console.log("* * * * * * *");
}

/*console.log("Print a Square of 7 * 7 Stars");
for (i = 1; i <= 7; i++) {
    console.log("* * * * * * *");
}*/


//Practice Code
var calcArea = function(oneSide) {
    return oneSide * oneSide;
}

function main(aSide) {
    console.log(calcArea(aSide));
}
main(Math.pow(2,3));

// Math.pow raises a number to the nth power
// '*' multiplies
// '-' subtracts
// '%' gives the mod
// '/' divides


