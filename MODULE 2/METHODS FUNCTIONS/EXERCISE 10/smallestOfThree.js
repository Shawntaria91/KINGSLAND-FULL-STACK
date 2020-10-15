function main(num1, num2, num3) {
    function smallestNumber(num1, num2, num3) {
        let smallest = num1;

        if (num2 < smallest) {
            smallest = num2;
        }

        if (num3 < smallest) {
            smallest = num3;
        }
    return smallest;
}
console.log(smallestNumber(2, 5, 3));
}
main();

/**
 * function main(num1, num2, num3) {

    function smallestOf3(num1, num2, num3) {

        var smallest = Infinity;

        if (num1 < smallest) {
            smallest = num1;
        }

        if (num2 < smallest) {
            smallest = num2;
        }

        if (num3 < smallest) {
            smallest = num3;
        }

        return smallest;


    }

    console.log(smallestOf3(n, num2, num3));



}

 */