function main(num1, num2, operator) {

    let output;

    switch (operator) {

        case '+':
            output = num1 + num2;
            break;
        case '-':
            output = num1 - num2;
            break;
        case '/':
            output = num1 / num2;
            break;
        case '*':
            output = num1 * num2;
            break;
        case '%':
            output = num1 % num2;
            break;
        case '**':
            output = num1 ** num2;
            break;
    }
    console.log(output);
}

main(5, 6, '+');

// Output:
// 11