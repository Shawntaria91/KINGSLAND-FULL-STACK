// The input will be given as two separated strings.

// Write a function that checks given text for containing a given word. The comparison should be case insensitive.

// Once you find a match, print the word and stop the program.

// If you don't find the word print "{word} not found!"



function main(firstStr, secStr) {

    if (secStr.toLowerCase().includes(firstStr.toLowerCase())) {

        console.log(firstStr);
    } else {

        console.log(`${firstStr} not found!`);
    }
}
main('javascript','JavaScript is the best programming language');