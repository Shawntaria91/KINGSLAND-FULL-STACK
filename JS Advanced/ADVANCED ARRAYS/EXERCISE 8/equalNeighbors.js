// Write a function that counts the total number of equal value pairs found inside a matrix. Compare two
// arrays that are next to each other and if two strings have the same position and value, count them as a
// pair.
// The input comes as array of arrays, containing string elements (2D matrix of strings).
// The output is return value of your function. Count the number of pairs the function finds and return it.
function main(matrix) {
    let numOfPairs = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            if (row < matrix.length - 1) {
                if (matrix[row][column] == matrix[row + 1][column]) {
                    numOfPairs++;
                }
            }
            if (column < matrix[row].length) {
                if (matrix[row][column] == matrix[row][column + 1]) {
                    numOfPairs++;
                }
            }
        }
    }
    console.log(numOfPairs);
}
main([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);