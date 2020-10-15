// Write a function that manipulates an array of numbers.
// Add {number}: add a number to the end of the array
// Remove {number}: remove number from the array
// RemoveAt {index}: removes number at a given index
// Insert {number} {index}: inserts a number at a given index
// Note: All the indices will be valid!
// Print the final state of the array (separated by single space).
// The input comes as an array of strings. 
// First element will be a string containing the array to manipulate. Every other
// command you receive will also be a string.
// The output is the manipulated array printed on the console on a single line, separated by space.

function manipulateArr(initialArr) {

    let numArr = initialArr.shift().split(' ').map(Number);

    for(i = 0; i < initialArr.length; i++) {

        let [command, firstNum, secNum] = initialArr[i].split(' ');

        firstNum = Number(firstNum);
        secNum = Number(secNum);

        switch (command) {

            case 'Add':
                numArr.push(firstNum);
                break;
                
            case 'Remove':
                numArr = numArr.filter(elem => elem !== firstNum);
                break;

            case 'RemoveAt':
                numArr.splice([firstNum], 1);
                break;

            case 'Insert':
                numArr.splice([secNum], 0, firstNum);
                break;
        }
    }
    console.log(numArr.join(' '));
}

function main(initialArr) {

    manipulateArr(initialArr);
}
main(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);