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

    if ((operator == "+") || (operator == "-") || (operator == "*")) {
        if (result % 2 == 0) {
            console.log(`${num1} ${operator} ${num2} = ${result} - even`);
        } else {
            console.log(`${num1} ${operator} ${num2} = ${result} - odd`);
        }
    } else if (((operator == "/") || (operator == "%")) && (num2 == 0)) {
        console.log(`Cannot divide ${num1} by zero`); 
    } else if ((operator == "/") && (num2 != 0)) {
        console.log(`${num1} ${operator} ${num2} = ${result.toFixed(2)}`);
    } else {
        console.log(`${num1} ${operator} ${num2} = ${result}`);
    }
    
}
main(1034, 16960, "/");