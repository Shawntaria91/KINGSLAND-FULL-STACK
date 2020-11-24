// A square matrix of numbers. Write a function that finds the sum at the main and at the secondary
// diagonals.
// The input comes as an array of arrays, containing number elements (2D matrix of numbers).
// The output is printed on the console on a single line separated by space. First print the sum at the main
// diagonal, then the sum at the secondary diagonal.
function main(input) {
    diagSum(input);
}
function diagSum(input) {
    let mainDiag = 0;
    let secDiag = 0;
    let firstIdx = 0;
    let secIdx = input[0].length - 1;
    input.forEach(array => {
        mainDiag += array[firstIdx++];
        secDiag += array[secIdx--];
    });
    console.log(`${mainDiag} ${secDiag}`);
}
main([
    [20, 40],
    [10, 60]
]);