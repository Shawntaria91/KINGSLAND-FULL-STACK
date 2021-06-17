// 2. Even or Odd

// You need to write unit tests for a function isOddOrEven() that checks whether the length of a passed
// in string is even or odd .
// If the passed parameter is NOT a string return undefined . If the parameter is a string return either
// " even " or " odd " based on the length of the string.

// JS Code
// You are provided with an implementation of the isOddOrEven() function:

//                      isOddOrEven.js
//  function isOddOrEven(string) {
//     if (typeof(string) !== 'string') {
//         return undefined;
//     }
//     if (string.length % 2 === 0) {
//         return "even";
//     }
//     return "odd";
//  }

// Hints
// We can clearly see there are three outcomes for the function: 
// Returning undefined
// Returning " even "
// Returning " odd "

// Write one or two tests passing parameters that are NOT of type string to the
// function and expecting it to return undefined.


// What to submit?
// Export the function in isOddOrEven.js and import it in your test file to test it. Submit a zip file containing the
// isOddOrEven.js and tests folder containing the isOddOrEven.test.js . Do not include the node_modules folder.
// File Name: EVEN-OR-ODD.zip


function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        //  console.log("undef")
        return undefined;
    }
    if (string.length % 2 === 0) {
        // console.log("even")
        return "even";

    }
    //console.log("odd")
    return "odd";
}

module.exports = isOddOrEven;