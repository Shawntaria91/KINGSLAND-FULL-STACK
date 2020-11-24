function main(n) {
    let lastDigit = 0;
    lastDigit = n % 10;

    if (lastDigit == 0) {
        lastDigit = "zero";
    } else if (lastDigit == 1) {
        lastDigit = "one";
    } else if (lastDigit == 2) {
        lastDigit = "two";
    } else if (lastDigit == 3) {
        lastDigit = "three";
    } else if (lastDigit == 4) {
        lastDigit = "four";
    } else if (lastDigit == 5) {
        lastDigit = "five";
    } else if (lastDigit == 6) {
        lastDigit = "six";
    } else if (lastDigit == 7) {
        lastDigit = "seven";
    } else if (lastDigit == 8) {
        lastDigit = "oeight";
    } else if (lastDigit == 9) {
        lastDigit = "nine";
    }
    console.log(lastDigit);
}
main(512);