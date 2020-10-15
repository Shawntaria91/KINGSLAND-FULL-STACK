// Write a function that prints the two smallest elements from an array of numbers.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.
function main(arr) {
    arr = arr.map(Number);
    console.log(arr.sort((a, b) => a - b).slice(0, 2).join(" "));
}
main([30, 15, 50, 5]);