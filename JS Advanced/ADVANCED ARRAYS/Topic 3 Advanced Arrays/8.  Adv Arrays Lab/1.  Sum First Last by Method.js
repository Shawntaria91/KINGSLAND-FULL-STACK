// 1. Sum First Last
// Write a function that calculates and prints the sum of the first and the last elements in an array.
// The input comes as array of string elements holding numbers.
// The output is the return value of your function.
function main(inputArr){
    sumFirstLastByUnshiftPop(inputArr);
}

function sumFirstLastByUnshiftPop(inputArr){
    let first = inputArr.shift();
    let last = inputArr.pop();
    let finalSum = Number(first) + Number(last);
    console.log(finalSum);
}
main(['20', '30', '40']);//60
main(['5', '10']);// 15