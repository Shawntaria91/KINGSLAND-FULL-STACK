// You are given an array of numbers. Write a JS function that takes each element located in an odd position
// of the given array, doubles the value of each of those elements, and prints them in reverse order.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.
function main(arr) {
    let output = arr
        .filter((arr, x) => x % 2 == 1)
        .map(x => 2 * x)
        .reverse();
    console.log(output.join(' '));
}
main([10, 15, 20, 25]);