
// A square matrix of numbers. Write a function that finds the sum at the main and at the secondary
// diagonals.
// The input comes as an array of arrays, containing number elements (2D matrix of numbers).
// The output is printed on the console on a single line separated by space. First print the sum at the main
// diagonal, then the sum at the secondary diagonal.
function main(matrix){
    sumDiagonalMatrix(matrix);
}
function sumDiagonalMatrix(matrix) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = matrix[0].length - 1;
    matrix.forEach(array => {
        firstDiagonal += array[firstIndex++];
        secondDiagonal += array[secondIndex--];
    });
    console.log(`${firstDiagonal} ${secondDiagonal}`);
}
main(
[
    [20, 40], 
    [10, 60]
]);
main(
[
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);