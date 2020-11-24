// Write a JS function that rotates an array. The array should be rotated to the right side, meaning that the
// last element should become the first, upon rotation.
// The input comes as an array of strings. The last element of the array is the number of rotations you need
// to make.
// The output is the resultant array after the rotations. The elements should be printed on one line,
// separated by a single space.

// arr = num of arrays and num of rotations
function main(arr) {

    // num of rotations taken out of num arr
    let numOfRotations = +arr[arr.length - 1];
    arr.pop();
    if (isNaN(numOfRotations)) {
        console.log('Empty');
    } else {
        for (let i = 1; i <= numOfRotations; i++) {
            arr.unshift(arr.pop());
        }
        console.log(arr.join(' '));
    }
}
main(['1', '2', '3', '4', '2']);