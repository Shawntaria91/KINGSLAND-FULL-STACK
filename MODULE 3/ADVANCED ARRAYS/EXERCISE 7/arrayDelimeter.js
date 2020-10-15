// The input comes as an array of strings. The last element of the array is the delimiter.
// The output is the same array, printed on the console, each element separated from the others by the
// given delimiter.
function main(arrOfStr) {
    arrWithDelim(arrOfStr);
}
function arrWithDelim(arrOfStr) {
    let delim = arrOfStr.pop();
    console.log(arrOfStr.join(delim));
}
main(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-'
]);