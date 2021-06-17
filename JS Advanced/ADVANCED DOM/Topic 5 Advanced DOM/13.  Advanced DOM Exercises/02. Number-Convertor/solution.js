// 2. Number Convertor
// Write a function that converts a decimal number to binary and hexadecimal. 
// The given number will always be in decimal format. The "From" select menu will only have a
// Decimal option, but the "To" select menu will have two options: Binary and Hexadecimal. This means that our program should have the functionality to convert decimal to binary and decimal to hexadecimal. Note that "To" select menu by default is empty. You have to insert the two options ('Binary' and 'Hexadecimal') inside before continue. Also they should have values ('binary' and 'hexadecimal').  When the [Convert it] button is clicked, the expected result should appear in the [Result] input field. 
function solve() {

    let selectMenuField = document.querySelector('#selectMenuTo'); // define select menu element
    let binaryOptionElement = document.createElement('option'); // create drop down element for 'Binary'
    let hexadecimalOptionElement = document.createElement('option'); // create drop down element for 'Hexadecimal'

    binaryOptionElement.value = 'binary'; // setting value of Binary option element (need to test if this is necessary)
    binaryOptionElement.text = 'Binary'; // setting text of Binary option element

    hexadecimalOptionElement.value = 'hexadecimal'; // setting value of Hexadecimal option element (need to test if this is necessary)
    hexadecimalOptionElement.text = 'Hexadecimal'; // setting value of Hexadecimal option element 

    selectMenuField.add(binaryOptionElement); // add binary option element to the select menu element
    selectMenuField.add(hexadecimalOptionElement);  // add hex option element to the select menu element

    document.querySelector('button').addEventListener('click', clickEvent); // add event listener to the button element
    function clickEvent() {
        let inputNumber = +document.querySelector('#input').value; //define inputNumber
        let selectMenuField = document.querySelector('#selectMenuTo'); // define selectMenu within this function
        let selectedOption = selectMenuField.options[selectMenuField.selectedIndex].text; // define selected option
        let result;

        selectedOption == 'Binary' ? result = inputNumber.toString(2) :
        selectedOption == 'Hexadecimal' ? result = inputNumber.toString(16).toUpperCase() : 0;
    
        document.querySelector('#result').value = result; 
    }
}