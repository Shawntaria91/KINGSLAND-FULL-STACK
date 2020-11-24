function main(num1, num2, operator) {
    var result = 0.00;
    if (operator == "+") {
        result = num1 + num2;
    } else if (operator == "-") {
        result = num1 - num2;
    } else if (operator == "*") {
        result = num1 * num2;
    } else if (operator == "/") {
        result = num1 / num2;
    } else if (operator == "%") {
        result = num1 % num2;
    }else {
        console.log("Please select operator +, -, *, /, or %");
    }
    console.log(`${num1} ${operator} ${num2} = ${result}`);
}
main(10, 12, "+");