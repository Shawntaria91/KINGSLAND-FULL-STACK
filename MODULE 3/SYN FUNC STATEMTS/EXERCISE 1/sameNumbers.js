// Write a function that takes an integer number as an input and 
//checks if all the digits in a given number are the same or not.
// Print on the console true if all numbers are same and false if not. 
//On the next line print the sum of all the digits.
// The input comes as an integer number.
// The output should be printed on the console.

function main(input) {

    sameNum(input);
}

function sameNum(input) {

    input = String(input);

    let result = true;
    let currNum = input[0];
    let sum = 0;
    

    for (let i = 0; i < input.length; i++) {

        sum += +input[i];

        if (input[i] !== currNum) {

            result = false;
        }
    }
    console.log(result);
    console.log(sum);
}
main(2222222);
main(1234);