// Write a function that implements a calculator that has the following functionalities: 
// When one of the buttons is clicked, its value should be shown in the "Expression" field (#expressionOutput).
// For instance, if we click on the button with value 9, the expected result should be: 
// If the current Expression field (#expressisonOutput) contains the whole math expression 
// (left operand, operator and right operand: Example: 9 + 2), the expected result should be: 
// When the equal sign "=" is pressed, the result of that expression should appear in the Result field
// (#resultOutput) 
// Otherwise, if we create an invalid expression such as "99 +" (without second/right operand) and we hit the equal
// sign "=", the expected result should be:
// The "Clear" button should clear both Expression and Result fields (#expressionOutput and
//     #resultOutput)
//     For instance, if we have the following expression: 
//     And we press "Clear", the expected result should be: 

function solve() {
    const keys = Array.from(document.getElementsByClassName('keys'));
    const expOutput = document.getElementById('expressionOutput');
    const result = document.getElementById('result');
    const clearButton = document.querySelector('.clear');
    let operand;
    let firstNum = '';
    let secNum = '';
    const calc = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    };
    keys.map(key => key.addEventListener('click', function(event) {
        const currSelection = event.target.value;
        clearButton.addEventListener('click', () => {
            expOutput.textContent = '';
            result.textContent = '';
            firstNum = '';
            secNum = '';
            operand = '';
        });
        if (+currSelection || currSelection == '.' || currSelection == '0') {
            if (!operand) {
                firstNum += currSelection;
                expOutput.textContent += currSelection;
            } else {
                secNum += currSelection;
                expOutput.textContent += currSelection;
            }
        } else if (calc.hasOwnProperty(currSelection)) {
            operand = currSelection;
            expOutput.textContent += ` ${operand} `;
        } else if (currSelection == '=') {
            if (+firstNum && +secNum) {
                result.textContent = calc[operand](+firstNum, +secNum);
            } else {
                result.textContent = 'NaN';
            }
        }
    }));
}