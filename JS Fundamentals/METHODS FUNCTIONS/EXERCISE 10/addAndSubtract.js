// Write a function sum() to get the result of the first 2 integers.
// Write a function subtract() that subtracts the 3rd integer from the result.

function main(num1, num2, num3) {
function addAndSubtract(num1, num2, num3) {
    let result = 0;

    function sum(num1, num2) {
        result = num1 + num2;
        return result;
    }
    sum(num1, num2);

    function subtract(num3) {
        result = result - num3;
        return result;
    }
    subtract(num3);

console.log(result);
}
addAndSubtract(num1, num2, num3);
}
main(23, 6, 10); //19