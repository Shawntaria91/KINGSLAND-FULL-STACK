function main(n, intArray) {
    var firstSum = 0;
    var secondSum = 0;
    var sum = 0;
    
    for (var i = 0; i < n; i++) {  
        sum = intArray.shift();     
        firstSum = firstSum += sum;
    }

    for (var j = 0; j < n; j++) {
        sum = intArray.shift();
        secondSum = secondSum += sum;
    }

    if (firstSum == secondSum) {
        console.log(`Yes, value=${secondSum}`);
    } else {
        var diff = firstSum - secondSum;
        console.log(`No, maxdiff=${diff}`);
    }
}
main(2, [-1, 0, 0, -1]);
main(2, [5, 6, 3, 7]);
