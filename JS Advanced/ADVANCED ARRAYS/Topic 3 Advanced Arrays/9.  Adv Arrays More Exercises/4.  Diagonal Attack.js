// 4. Diagonal Attack
// Write a JS function that reads a given matrix of numbers and checks if both main diagonals have an equal
// sum. If they do, set every element that is NOT part of the main diagonals to that sum, alternatively, just
// print the matrix unchanged.
// The input comes as an array of strings. Each element represents a string of numbers with spaces between
// them. Parse it into a matrix of numbers so you can work with it.
// The output is either the new matrix with all cells not belonging to a main diagonal changed to the diagonal
// sum or the original matrix, if the two diagonals have different sums. You need to print every row on a new
// line with cells separated by a space. Check the examples below.
function main(matrixRows) {
    diagonalsAttack(matrixRows);
}
function diagonalsAttack(matrixRows) {
    let matrix = matrixRows.map(
        row => row.split(' ').map(Number));
    let sumFirstDiagonal = 0;
    for (var i = 0; i < matrix.length; i++) {
        sumFirstDiagonal = sumFirstDiagonal + matrix[i][i];
    }
    let sumSecondDiagonal = 0;
    for (var j = 0; j < matrix.length; j++) {
        sumSecondDiagonal = sumSecondDiagonal + matrix[j][matrix.length - 1 - j];
    }
    if (sumFirstDiagonal == sumSecondDiagonal) {
        for (var q = 0; q < matrix.length; q++) {
            for (var z = 0; z < matrix.length; z++) {
                if (q != z && q != matrix.length - 1 - z) {
                    matrix[q][z] = sumFirstDiagonal;
                }
            }
        }
        printMatrix(matrix);
    } else {
        printMatrix(matrix);
    }

    function printMatrix(matrix) {
        for (var i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '));
        }
    }
}
main(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10 ',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);
main(['1 1 1',
    '1 1 1',
    '1 1 0'
]);

// 5 15 15 15 1
// 15 4 15 2 15
// 15 15 3 15 15
// 15 4 15 2 15
// 5 15 15 15 1 

// 1 1 1
// 1 1 1
// 1 1 0 





