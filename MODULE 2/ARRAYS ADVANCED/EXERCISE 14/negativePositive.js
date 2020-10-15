function negPos(someArr) {

    let sortedArray = [];

    for (i = 0; i < someArr.length; i++) {
        if (someArr[i] < 0) {
            sortedArray.unshift(someArr[i]);
        } else if (someArr[i] >= 0) {
            sortedArray.push(someArr[i]);
        } else {
            console.log("Number not valid");
        }
    }
    for (j = 0; j < sortedArray.length; j++) {
        console.log(sortedArray[j]);
    }
}
negPos([7, -2, 8, 9]);