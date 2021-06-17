// 3. Char Lookup
// Write unit tests for a function that retrieves a character at a given index from a passed in string .
// You are given a function named lookupChar() , which has the following functionality:
// ● lookupChar(string, index) - accepts a string and an integer (the index of the char we
// want to lookup) :
// o If the first parameter is NOT a string or the second parameter is NOT a number - return
// undefined .
// o If both parameters are of the correct type but the value of the index is incorrect (bigger
// than or equal to the string length or a negative number) - return " Incorrect index " .
// o If both parameters have correct types and values - return the character at the specified index in the string.

// JS Code
// You are provided with an implementation of the lookupChar() function:

//                     charLookUp.js
// function lookupChar (string, index) {
// if ( typeof (string) !== 'string' || !Number. isInteger (index)) {
// return undefined ;
// }
// if (string. length <= index || index < 0 ) {
// return "Incorrect index" ;
// }
// return string. charAt (index);
// }

// Hints
// А good first step in testing a method is usually to determine all exit conditions. Reading through the
// specification or taking a look at the implementation we can easily determine 3 main exit conditions :
// ● Returning undefined
// ● Returning an empty string
// ● Returning the char at the specified index
// Now that we have our exit conditions we should start checking in what situations we can reach them.
// If any of the parameters are of incorrect type , undefined should be returned.


function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

module.exports = { lookupChar };