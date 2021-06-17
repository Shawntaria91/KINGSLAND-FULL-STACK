// 5. Sudomu 
// Write a function that implements SUDOMU ( Sudoku inside the DOM ).
// The rules are simple and they are the same as the typical sudoku game (for more information,
//     click here )
//     If the table is filled with the right numbers , and the " Quick Check " button is clicked , the
//     expected result should be:
// SUDOMU 
// You solve it! Congratulations!
// The table border should be changed to: " 2px solid green ". The text content of the paragraph
// inside the div with an id " check " must be " You solve it! Congratulations! "
// The text color of that div must be green.
// Otherwise, when the filled table does not solve the sudomu, the result should be:
// SUDOMU
// NOP! You are not done yet..
// The table border should be changed to: " 2px solid red ".
// The text content of the paragraph inside the div with an id " check " must be:
// " NOP! You are not done yet… "
// The text color of that div must be red!
// The " Clear " button clears the whole SUDOMU (removes all numbers) and the paragraph
// which contains the messages. It also removes the table border.
// SUDOMU
// The SUDOMU Board is clear.
// What to submit?
// Zip file containing the following:
// ● solution.js
// ● template.css
// ● Template.html
// ● 9 x 9 folder
// File Name: SUDOMU.zip
function solve() {
    let inputs = document.querySelectorAll('input');
    const checkBtn = document.querySelectorAll('button')[0];
    const clear = document.querySelectorAll('button')[1];
    const table = document.querySelector('table');
    const checkPar = document.querySelectorAll('#check p')[0];
    checkBtn.style.cursor = 'pointer';
    clear.style.cursor = 'pointer';
    clear.addEventListener('click', reset);
    checkBtn.addEventListener('click', checkResult);

    function reset() {
        [...inputs].forEach(input => (input.value = ''));
        table.style.border = 'none';
        checkPar.textContent = '';
    }

    function checkResult() {
        let matrix = [
            [inputs[0].value, inputs[1].value, inputs[2].value],
            [inputs[3].value, inputs[4].value, inputs[5].value],
            [inputs[6].value, inputs[7].value, inputs[8].value]
        ];
        isSudomu = true;
        for (let i = 1; i < matrix.length; i++) {
            let row = matrix[i];
            let col = matrix.map(row => row[i]);
            if (col.length != [...new Set(col)].length || row.length != [...new Set(row)].length) {
                isSudomu = false;
                break;
            }
        }
        if (isSudomu) {
            table.style.border = '2px solid green';
            checkPar.style.color = 'green';
            checkPar.textContent = 'You solve it! Congratulations!';
        } else {
            table.style.border = '2px solid red';
            checkPar.style.color = 'red';
            checkPar.textContent = 'NOP! You are not done yet...';
        }
    }
}
//