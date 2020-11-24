// Write a function that finds the elements at even positions in an array.
// The input comes as an array of string elements.
// The output is the return value of your function. Collect all elements in a string separated by a space.
function main(arr) {
    let output = [];
    for (let i in arr) {
        if (i % 2 == 0) {
            output.push(arr[i]);
        }
    }
    console.log(output.join(" "));
}
main(['20', '30', '40']);