// 5. Process Odd Numbers
// You are given an array of numbers. Write a JS function that takes each element located in an odd position
// of the given array, doubles the value of each of those elements, and prints them in reverse order.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.
function main(arr){
    oddModFilterMapInlinePrintJoin(arr);
}

function oddModFilterMapInlinePrintJoin(arr) {
    let result = arr
        .filter((arr, x) => x % 2 == 1)//takes each element located in an odd position
        .map(x => 2 * x)//doubles the value of each element
        .reverse();// prints them in reverse order
    console.log(result.join(' '));//printed on the console on a single line, separated by space
}
main([10, 15, 20, 25]);// 50 30
main([3, 0, 10, 4, 7, 3]);// 6 8 0


