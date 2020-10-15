// Write a function that receives a number and returns if this number is perfect or NOT.
// A perfect number is a positive integer that is equal to the sum of its proper positive divisors. That is the sum of its
// positive divisors excluding the number itself (also known as its aliquot sum).
function main(num) {
    var currentNum = 0;
    for (var i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            currentNum += i;
        }
    }
    if (currentNum === num && currentNum !== 0) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
main(6);