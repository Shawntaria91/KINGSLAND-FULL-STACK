// 6. Smallest Two Numbers
// Write a function that prints the two smallest elements from an array of numbers.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.
function main(arr){
    smallestTwoNumsSortSlice(arr); 
}    

function smallestTwoNumsSortSlice(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    console.log(sortedArr.slice(0,2).join(" "));
}
main([30, 15, 50, 5]);// 5 15
main([3, 0, 10, 4, 7, 3]);// 0 3  