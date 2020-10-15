// Write a JS function that checks each element of a given array to produce a new array result. Prepend each
// negative element and append each positive or 0 element.
// The input comes as an array of number elements.
// The output is the elements (separated by a newline) of the resulting array printed in the console.
function main(arr) {
    arr = arr.map(Number);
    let output = [];
    for (let elem of arr) {
        if (elem < 0) {
            output.unshift(elem);
        } else {
            output.push(elem);
        }
    }
    output.forEach(elem => console.log(elem));
}
main([7, -2, 8, 9]);