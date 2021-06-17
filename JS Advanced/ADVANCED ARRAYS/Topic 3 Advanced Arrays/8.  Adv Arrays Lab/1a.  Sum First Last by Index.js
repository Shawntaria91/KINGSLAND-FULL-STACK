//1. Sum First Last
// Write a function that calculates and prints the sum of the first and the last elements in an array.
// The input comes as array of string elements holding numbers.
// The output is the return value of your function.
function main(arr){
    sumFirstLastNums(arr);
}
function sumFirstLastNums(arr) {
    let n1 = +(arr[0]);
    let n2 = +(arr[arr.length - 1]);
    console.log(n1 + n2);
}
main(['20', '30', '40']);
// 60
main(['5', '10']);
// 15
