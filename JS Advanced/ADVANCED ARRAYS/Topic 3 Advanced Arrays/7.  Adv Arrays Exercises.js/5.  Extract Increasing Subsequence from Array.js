// 5. Extract Increasing Subsequence from an Array
// Write a function that extracts only those numbers that form a non-decreasing subsequence. In other
// words, you start from the first element and continue to the end of the given array of numbers. Any
// number which is LESS THAN the current biggest one is ignored, alternatively if it’s equal or higher than the
// current biggest one you set it as the current biggest one and you continue to the next number.
// The input comes as an array of numbers.
// The output is the processed array after the filtration, which should be a non-decreasing subsequence.
// Each element should be printed on a new line.
function main(numArr){
    extractNonConformingNum(numArr);
}

function extractNonConformingNum(numArr) {
    let result = [];
    let biggestNum = numArr[0];
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] >= biggestNum) {
            result.push(numArr[i]);
            biggestNum = numArr[i];
        }
    }
    console.log(result.join('\n'));
}
// Hints
//  The Array.reduce() built-in function might help you a lot with this problem.
main(
[
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);
// 1
// 3
// 8
// 10
// 12
// 24

main(
[
    1,
    2,
    3,
    4
]);
// 1
// 2
// 3
// 4

main(
[
    20,
    3,
    2,
    15,
    6,
    1
]);
// 20
