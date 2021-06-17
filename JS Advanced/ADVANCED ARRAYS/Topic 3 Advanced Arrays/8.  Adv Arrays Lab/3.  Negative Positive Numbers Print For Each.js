// 3. Negative / Positive Numbers
// Write a JS function that checks each element of a given array to produce a new array result. Prepend each negative element and append each positive or 0 element.
// The input comes as an array of number elements.
// The output is the elements (separated by a newline) of the resulting array printed in the console.

function main(arrOfNums){
    arrayPrintForEach(arrOfNums);
}

function arrayPrintForEach(arrOfNums){
    let arr = arrOfNums.map(Number);//map over all elements to turn them into numbers
    let result = [];

    for (let element of arr) {
        if (element < 0) {//if element is negative, add to front of the array(prepend)
            result.unshift(element);
        } else {//if element is positive or zero, add to back of the array(apend)
            result.push(element);
        }
    }
    result.forEach(el => console.log(el));//prints elements separated by a newline
}
main([7, -2, 8, 9]);
// -2
// 7
// 8
// 9
main([3, -2, 0, -1]);
// -1
// -2
// 3
// 0                            

