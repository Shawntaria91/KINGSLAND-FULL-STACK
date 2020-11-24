function factorialDivision(num) {
    if (num == 0) {
        return 1;
    }
    return num * factorialDivision(num - 1);
}
function main(num1, num2) {
    let firstResult = factorialDivision(num1);
    console.log((firstResult / num2).toFixed(2));
}
main(5, 2);