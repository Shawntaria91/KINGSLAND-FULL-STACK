// Write a higher-order function that fixes some of the parameters of another function. Your program will receive a
// function that takes 4 parameters and returns a formatted string (a monetary value with currency symbol).
// Your task is to return another function that only takes one parameter and returns the same formatted string.
// You will receive the following function:
//                         currencyFormatter
// function currencyFormatter(separator, symbol, symbolFirst, value) {
//     let result = Math.trunc(value) + separator;
//     result += value.toFixed(2).substr(-2,2);
//     if (symbolFirst) return symbol + ' ' + result;
//     else return result + ' ' + symbol;
//     }
// Set the following parameters to fixed values:
// separator: ","
// symbol: "$"
// symbolFirst: true
// The final parameter value is the one that the returned function will receive.
// Input
// You will receive a function parameter
// Output
// You need to return a function that takes one parameter - value
function limitParams(currencyFormatter) {
    let separator = ",";
    let symbol = "$";
    let symbolFirst = true;
    let getValue = value => currencyFormatter(separator, symbol, symbolFirst, value);
    return getValue;
}
function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}
let getVaule = limitParams(currencyFormatter);
console.log(getVaule(5345)); // $ 5345,00
console.log(getVaule(3.1429)); // $ 3,14
console.log(getVaule(2.709)); // $ 2,71