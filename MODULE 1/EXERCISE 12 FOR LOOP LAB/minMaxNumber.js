function main(n, numArray) {

    var minNum = numArray[0];
    var maxNum = numArray[0];
    for (var i = 0; i < n; i++) {
        var currentNum = numArray.shift();

        if (currentNum > maxNum) {
            maxNum = currentNum;
        } else if (currentNum < minNum) {
            minNum = currentNum;
        }
    }
    console.log("Min number: " + minNum);
    console.log("Max number: " + maxNum);

}
main(3, [10, 350, 50]);