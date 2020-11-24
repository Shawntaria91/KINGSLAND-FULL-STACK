// Write a function that finds the biggest element inside a matrix.
// The input comes as an array of arrays, containing number elements (2D matrix of numbers).
// The output is the return value of your function. Find the biggest element and return it.
function main(arrOfArrays) {
    biggestElem(arrOfArrays);
}
function biggestElem(arrOfArrays) {
    let concatTheArr = [];
    for (let i = 0; i < arrOfArrays.length; i++) { //loop through the array of arrays to get them out and concat them
        concatTheArr = concatTheArr.concat(arrOfArrays[i]);
    }
    console.log(Math.max(...concatTheArr)); //gets the largest number in the array
}
main([
    [20, 50, 10],
    [8, 33, 145]
]);