
function growingWord() {

    const colorSelections = ['blue', 'green', 'red']; // define 'colorSelections' as an array with the 3 colors
    const words = document.querySelector('#exercise p'); // define 'words'

    let color = words.style.color; // define 'color' 
    words.style.color = !color ? 'blue' : colorSelections[(colorSelections.indexOf(color) + 1) % colorSelections.length];
    //if the color of 'words' is undefined, set it to 'blue' 
    //else set to the next color in the colorSelections array
    //next color is determined by: (current color index + 1) % 3 (there are 3 color elements in the array)

    // if current color is undefined =>  color is set to 'blue'
    // if current color is blue =>  [0 + 1] % 3 = 1 (index 1 is green) color is set to 'green'
    // if current color is green => [1 + 1] % 3 = 2 (index 2 is red) color is set to 'red'
    // if current color is red =>   [2 + 1] % 3 = 0 (index 0 is blue) color is set to 'blue'
    // if current color is blue =>  [3 + 1] % 3 = 1 (index 1 is green) color is set to 'green'

    let fontSize = words.style.fontSize.replace('px', '');
    //set variable 'fontSize' to (0) by replacing 'px' with '' on line 66 in CSS file 
    words.style.fontSize = (!fontSize ? '2' : fontSize * 2) + 'px';
    // set line 66 with the result of the following:
    // if fontSize is undefined, set it at '2px'
    // else, set it at '(current fontSize * 2)px', basically double the fontSize
}
