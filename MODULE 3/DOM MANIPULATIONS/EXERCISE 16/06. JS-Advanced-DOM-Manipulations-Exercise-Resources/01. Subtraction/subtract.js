// An HTML page holds two text fields with ids "firstNumber" and "secondNumber". 
// Write a function to subtract the values from these text fields and display the result in the div named "result".
// HTML and JavaScript Code
// Implement the above to provide the following functionality:
// Your function should take the values of "firstNumber" and "secondNumber", convert them to
// numbers, subtract the second number from the first one and then append the result to the <div>
// with id="result".
// Your function should be able to work with any 2 numbers in the inputs, not only the ones given in
// the example.
// Hints
// We see that the textboxes and the div have id attributes on them.
/* <div id="wrapper">
    <input type="text" id="firstNumber" value="13.33" disabled>
    <input type="text" id="secondNumber" value="22.18" disabled>
        <div id="result"></div>
</div> */
// We can take the numbers directly from the input field by using the getElementById() function. After
// we have taken the elements from the DOM, it's time to do the actual work. We get the values of the two
// textboxes, the value of a textbox, as one would expect, is text. In order to get a number, we need to use a
// function to parse them.
// let num1 = document.getElementById('firstNumber').value;
// let num2 = document.getElementById('secondNumber').value;
// All that's left now is to append the result to the div. We use the same function to get the result element by
// id and change its text content to the result of the subtraction.
// Example

function subtract() {
    let num1 = +(document.getElementById('firstNumber').value);
    let num2 = +(document.getElementById('secondNumber').value);
    document.getElementById('result').textContent = num1 - num2;
}