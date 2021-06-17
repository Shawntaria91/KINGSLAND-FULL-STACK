function main(arrOfStrings) {
    rotateElementsInArray(arrOfStrings);
}
function rotateElementsInArray(arrOfStrings){
    let rotationNum = arrOfStrings.pop();
    let i = 0;
    while (i < rotationNum){
        arrOfStrings.unshift(arrOfStrings.splice(-1));
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
main(
[
    'Banana',
    'Orange', 
    'Coconut',
    'Apple',
    '15'
]);
//Orange Coconut Apple Banana
