// Write a function that takes three number arguments as an input and find the largest of them. Print the

// following text on the console: 'The largest number is {number}.'.

// The input comes as three number arguments passed to your function.

// The output should be printed to the console.



function main(num1, num2, num3) {

    let result;

    if (num1 > num2 && num1 > num3) {

        result = num1;
    } else if (num2 > num1 && num2 > num3) {

        result = num2;
    } else if (num3 > num1 && num3 > num2) {

        result = num3;
    }
    console.log(`The largest number is ${result}.`);
}
main(5, -3, 16);
main(-3, -5, -22.5);