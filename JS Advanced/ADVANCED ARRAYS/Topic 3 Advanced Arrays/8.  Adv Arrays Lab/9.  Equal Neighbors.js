// 9. Equal Neighbors
// Write a function that counts the total number of equal value pairs found inside a matrix. Compare two
// arrays that are next to each other and if two strings have the same position and value, count them as a
// pair.
// The input comes as array of arrays, containing string elements (2D matrix of strings).
// The output is return value of your function. Count the number of pairs the function finds and return it.
function main(matrix){
    pairsWithinMatrix(matrix);
}
function pairsWithinMatrix(matrix) {
    let neighborsCounter = 0;
    //checks for pairs vertically between adjacent subarrays
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i < matrix.length - 1) {//i = row
                if (matrix[i][j] == matrix[i + 1][j]) {
                    //[i][j] = row i, index j
                    //[i + 1][j] = next row under, same index j
                    neighborsCounter++;
                }
            }
            // checks for pairs next to each other within the same subarray
            // this code does not apply to this particular problem
            if (j < matrix[i].length) {
                if (matrix[i][j] == matrix[i][j + 1]) {
                    //[i][j] = row i, index j
                    //[i][j + 1] = row i, next index j on same row i                 
                    neighborsCounter++;
                }
            }
        }
    }
    console.log(neighborsCounter);
}
main([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);//1
main([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);//2
