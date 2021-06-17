// 3. Unique Sequences
/*
You will be given an array that contains an array of numbers that is formatted as JSON. Create a function that stores
unique arrays and discards duplicate arrays. An array is considered the same (NOT unique) if it contains the same
numbers as another array, regardless of their order.
Print the arrays in ascending order based on their length. If two arrays have the same length, they should be printed
in the order of appearance. The values of each array should also be sorted in descending order. Check the examples
below.
Input
The input comes as an array of strings where each entry is a JSON representing an array of numbers.
Output
The output should be printed on the console - each array printed on a new line in the format "[a1, a2, a3,… an]" ,
following the above-mentioned ordering.
*/
function main(input) {
    let arrays = new Map;
    for (let line of input) {
        let array = JSON.parse(line).map(Number).sort((a, b) => b - a);
        let toStore = `[${array.join(', ')}]`;
        if (!arrays.has(toStore)) {
            arrays.set(toStore, array.length);
        }
    }
    let customSort = (arrA, arrB, map) => map.get(arrA) - map.get(arrB);
    console.log([...arrays.keys()].sort((a, b) => customSort(a, b, arrays)).join('\n'));
}
main(["[-3, -2, -1, 0, 1, 2, 3, 4]", "[10, 1, -17, 0, 2, 13]", "[4, -3, 3, -2, 2, -1, 1, 0]"]);
main(["[7.14, 7.180, 7.339, 80.099]", "[7.339, 80.0990, 7.140000, 7.18]", "[7.339, 7.180, 7.14, 80.099]"]);
// Examples 
// Input 
/*
["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]
// Output 
[13, 10, 2, 1, 0, -17]
[4, 3, 2, 1, 0, -1, -2, -3] 
*/
// Input 
/*
["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]
// Output 
[80.099, 7.339, 7.18, 7.14]
*/
