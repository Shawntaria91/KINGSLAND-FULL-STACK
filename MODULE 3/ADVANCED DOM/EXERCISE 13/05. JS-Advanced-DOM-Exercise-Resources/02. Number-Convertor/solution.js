// Write a function that converts a decimal number to binary and hexadecimal. 
// The given number will always be in decimal format. The "From" select menu will only have a
// Decimal option, but the "To" select menu will have two options: Binary and Hexadeicmal. 
// This means that our program should have the functionality to convert decimal to binary and
// decimal to hexadecimal. Note that "To" select menu by default is empty. 
// You have to insert the two options ('Binary' and
// 'Hexadecimal') inside before continue. Also they should have values ('binary' and 'hexadecimal'). 
// When the [Convert it] button is clicked, the expected result should appear in the [Result] input field. 

function solve() {
    //add select options
    let selectElem = document.querySelector('#selectMenuTo');
    let binary = document.createElement('option');
    let hexadecimal = document.createElement('option');
    binary.value = 'binary';
    binary.text = 'Binary';
    hexadecimal.value = 'hexadecimal';
    hexadecimal.text = 'Hexadecimal';
    selectElem.add(binary);
    selectElem.add(hexadecimal);

    //add click event
    document.querySelector('button').addEventListener('click', clickEvent);
    function clickEvent() {
        //get values
        let decimalNum = +document.querySelector('#input').value;
        let selectElem = document.querySelector('#selectMenuTo');
        let convertTo = selectElem.options[selectElem.selectedIndex].text;
        
        //convert
        let result;
        switch (convertTo) {
            case 'Binary':
                result = decimalNum.toString(2);
                break;
            case 'Hexadecimal':
                result = decimalNum.toString(16).toUpperCase();
                break;
        }
        //append output
        document.querySelector('#result').value = result;
    }
}