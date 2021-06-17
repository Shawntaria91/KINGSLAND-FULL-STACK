//                                     Lab: Unit Testing and Modules

// Error Handling

// 1. Sub Sum
// Write a function to sum a range of numeric elements from an array.
// The function takes three parameters 
// - the first is an array , 
// - the second is the start index 
// - and the third is the end index . 
// Both indexes are inclusive . Have in mind that the array elements may not be of type

// Number and cast everything . Implement the following error handling :
// ● If the first element is not an array, return NaN
// ● If the start index is less than zero, consider its value to be a zero
// ● If the end index is outside the bounds of the array, assume it points to the last index of the array

// Input / Output
// Your function must take three parameters . As output, return the sum .

function subSum(array, startIndex, endIndex) {
    if (array.constructor !== Array) return NaN;
    if (array.length === 0) return 0;
    if (startIndex < 0) startIndex = 0;
    if (endIndex > array.length - 1) endIndex = array.length - 1;

    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        if (isNaN(Number(array[i]))) return NaN;
        sum += array[i];
    }

    return sum;
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300)); // 150
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)); // 3.3
console.log(subSum([10, 'twenty', 30, 40], 0, 2)); // NaN
console.log(subSum([], 0, 2)); // 0
console.log(subSum('text', 0, 2)); // NaN
console.log(subSum(1, 0, 2)); // NaN


// Examples
// Input                                            Output
// [10, 20, 30, 40, 50, 60],    3, 300                150
// [1.1, 2.2, 3.3, 4.4, 5.5],  -3, 1                  3.3
// [10, 'twenty', 30, 40],      0, 2                  NaN
// [], 1, 2                                           0
// 'text', 0, 2                                       NaN

// What to submit?

// Export your function in subNum.js and import it in your test file to test it. 
// Submit a zip file containing the subNum.js and tests folder containing the subNum.test.js . 
// Do not include the node_modules folder.
// File Name: SUB-SUM.zip