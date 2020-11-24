function main(numOne, numTwo, numThree) {
    let result = '';
    if ((numOne >= 0 && numTwo >= 0 && numThree >= 0) ||
        (numOne < 0 && numTwo < 0 && numThree >= 0) ||
        (numTwo < 0 && numOne < 0 && numThree >= 0) ||
        (numTwo < 0 && numThree < 0 && numOne >= 0) ||
        (numThree < 0 && numTwo < 0 && numOne >= 0) ||
        (numThree < 0 && numOne < 0 && numTwo >= 0) ||
        (numOne < 0 && numThree < 0 && numTwo >= 0) ||
        (numOne < 0 && numThree >= 0 && numTwo == 0) ||
        (numOne < 0 && numThree == 0 && numTwo >= 0) ||
        (numTwo < 0 && numThree >= 0 && numOne == 0) ||
        (numTwo < 0 && numThree == 0 && numOne >= 0) ||
        (numOne >= 0 && numThree < 0 && numTwo == 0) ||
        (numOne == 0 && numThree < 0 && numTwo >= 0)) {
        result = 'Positive';
    } else {
        result = 'Negative';
    }
    console.log(result);
}
main(5,12,-15);