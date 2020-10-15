function main(num1, num2) {
    var powTotal = 1;

    for (i = 0; i < num2; i++) {

        powTotal *= num1;
    }
    console.log(powTotal);
}
main(2, 5);
main(3, 4);
main(2.5, 3);