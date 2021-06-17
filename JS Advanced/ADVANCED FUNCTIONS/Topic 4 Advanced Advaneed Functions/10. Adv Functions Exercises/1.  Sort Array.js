// 1. Sort Array
// Write a
// function that sorts an array with numeric values in ascending or descending order, depending on an
// argument that is passed to it.
// You will receive a numeric array and a string as arguments to the first
// function in your code.●If the second argument is asc, the array should be sorted in ascending order(smallest values first).●If it is desc, the array should be sorted in descending order(largest first).
// Input
// You will receive a numeric array and a string as input parameters.
// Output
// The output should be the sorted array.
// function main(input, command) {
//     if (command == 'asc') {
//         input.sort((a, b) => {
//             return a - b
//         })
        
//     } else {
//         input.sort((a, b) => {
//             return b - a
//         })
//     }
//     console.log(input)
// }


function main(inputArr, command) {
    
    command == 'asc' ? console.log(ascending(inputArr)) :    //.sort((a, b) => {return a - b}) :
    command == 'desc' ? console.log(descending(inputArr)) : 0;    //inputArr.sort((a, b) => {return b - a}) : 

}


main([14, 7, 17, 6, 8], 'asc'); //[6, 7, 8, 14, 17]
main([14, 7, 17, 6, 8], 'desc'); //[17, 14, 8, 7, 6]
