// 2. Magic Matrices
// Write a function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the
// cells of every row and every column are equal. 
// The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will
// always be positive.
// The output is a Boolean result indicating whether the matrix is magical or not.
// function main(matrix) {
//     let horizontalSums = matrix.map(function (y) {
//         return y.reduce(function (a, b) {
//             return a + b;
//         });
//     });
//     let sumVertical = (firstArr, secondArr) => firstArr.map((element, index) => secondArr[index] + element);
//     let verticalSums = matrix.reduce(sumVertical);
//     for (let horizontalSum of horizontalSums) {
//         for (let verticalSum of verticalSums) {
//             if (horizontalSum !== verticalSum) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

function main(matrix) {
    let horizontalSums = matrix.map(function (y) {
        return y.reduce(function (a, b) {
            return a + b;
        });
    });
    let sumVertical = (firstArr, secondArr) => firstArr.map((element, index) => secondArr[index] + element);
    let verticalSums = matrix.reduce(sumVertical);
    let result;
    for (let horizontalSum of horizontalSums) {
        for (let verticalSum of verticalSums) {
            if (horizontalSum !== verticalSum) {
                result = false;
            } else {
                result = true;
            }
        }
    }
    console.log(result);
}
//console.log(main(
main(
    [
        [11, 32, 45, 10, 20],
        [21, 0, 1, 30, 40],
        [21, 1, 1, 50, 60]
    ]
) ;
// 
main([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
main([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);
main([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]);
// Examples 
// Input                  Output
// [[4, 5, 6],             true 
//  [6, 5, 4],
//  [5, 5, 5]]
// [[11, 32, 45],          false 
//  [21, 0, 1],
//  [21, 1, 1]]
// [[1, 0, 0],                 true
//  [0, 0, 1],
//  [0, 1, 0]]



