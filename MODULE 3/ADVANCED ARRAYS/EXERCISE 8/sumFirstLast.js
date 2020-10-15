// Write a function that calculates and prints the sum of the first and the last elements in an array.
// The input comes as array of string elements holding numbers.
// The output is the return value of your function.
function main(arr) {
    let firstNum = +(arr[0]);
    let lastNum = +(arr[arr.length - 1]);
    let sum = firstNum + lastNum;
    console.log(sum);
}
main(['20', '30', '40']);