//Receives char1 and char 2
//write function to print single line
//characters between char1 and char 2 according to ASCII

function charsInRange(char1, char2) {
    let char1Value = char1.charCodeAt();
    let char2Value = char2.charCodeAt();
    let output = "";
    if (char1Value > char2Value) {
        for (let i = char2Value + 1; i < char1Value; i++) {
            output += `${String.fromCharCode(i)} `;
        }
    } else {
        for (let i = char1Value + 1; i < char2Value; i++) {
            output += `${String.fromCharCode(i)} `;
        }
    }
    return output;
}
function main(char1, char2) {
    let output = charsInRange(char1, char2);
    console.log(output.trim());
}
main("a", "d");