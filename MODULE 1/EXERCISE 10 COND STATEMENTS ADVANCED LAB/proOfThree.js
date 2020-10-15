function main(num1, num2, num3) {

    var product = num1 * num2 * num3;
    if (product == 0) {
        console.log("Zero");
    } else if (product < 0) {
        console.log("Negative");
    } else {
        console.log("Positive");
    }
}
main(2, 3, -1);
