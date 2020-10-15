// Write a function that takes two positive numbers as input and compute the greatest common divisor.

// The input comes as two positive integer numbers.

// The output should be printed on the console.



function main(posNum1, posNum2) {

    gcd(posNum1, posNum2);
}

function gcd(posNum1, posNum2) {

    if ((typeof posNum1 !== 'number') || (typeof posNum2 !== 'number')) {

        return false;
    } else {
        posNum1 = Math.abs(posNum1);
        posNum2 = Math.abs(posNum2);
    }
    while (posNum2) {

        let compute = posNum2;

        posNum2 = posNum1 % posNum2;

        posNum1 = compute;

    }
    console.log(posNum1);
}
main(15, 5);
main(2154, 458);