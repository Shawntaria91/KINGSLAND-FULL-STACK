// 4. Rotate Array
// Write a JS function that rotates an array. The array should be rotated to the right side, meaning that the
// last element should become the first, upon rotation.
// The input comes as an array of strings. The last element of the array is the number of rotations you need
// to make.
// The output is the resultant array after the rotations. The elements should be printed on one line,
// separated by a single space.
// Hints
//  Check if there is a built-in function for inserting elements at the start of the array.
function main(arrOfStrings) {
    rotateElementsInArray(arrOfStrings);
}
function rotateElementsInArray(arrOfStrings){
    let rotationNum = arrOfStrings.pop();
    let i = 0;
    while (i < rotationNum){
        arrOfStrings.unshift(arrOfStrings.pop());
        i++;
    }
    console.log(arrOfStrings.join(' '));
}
main(
[
    '1',
    '2', 
    '3',
    '4',
    '2'
]);
//3 4 1 2
main([
    'Banana',
    'Orange', 
    'Coconut',
    'Apple',
    '15'
]);
//Orange Coconut Apple Banana



