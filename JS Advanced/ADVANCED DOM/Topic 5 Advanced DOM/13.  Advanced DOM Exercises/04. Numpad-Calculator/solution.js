function solve() {
    const keys = Array.from(document.querySelectorAll('.keys'));
    const expressionOutput = document.querySelector('#expressionOutput');
    const result = document.querySelector('#resultOutput');
    const clearButton = document.querySelector('.clear');
    let operand;
    let firstNumber = '';   
    let secondNumber = '';

    const calculator = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    };

    keys.map(key => key.addEventListener('click', function(event) {
        const currentSelection = event.target.value;
        clearButton.addEventListener('click', () => {
            expressionOutput.textContent = '';
            result.textContent = '';
            firstNumber = '';
            secondNumber = '';
            operand = '';
        });

        if (+currentSelection || currentSelection == '.' || currentSelection == '0') {
            if (!operand) {
                firstNumber += currentSelection;
                expressionOutput.textContent += currentSelection;
            } else {
                secondNumber += currentSelection;
                expressionOutput.textContent += currentSelection;
            }
        } else if (calculator.hasOwnProperty(currentSelection)) {
            operand = currentSelection;
            expressionOutput.textContent += ` ${operand} `;
        } else if (currentSelection == '=') {
            if (+firstNumber && +secondNumber) {
                result.textContent = calculator[operand](+firstNumber, +secondNumber);
            } else {
                result.textContent = 'NaN';
            }
        }
    }));
}

