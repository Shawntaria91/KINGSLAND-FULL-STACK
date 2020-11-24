// Write a function that receives a text and a string that you need to search. 
// Print all the occurrences of that word in the string.

function main(string, text) {

    solve(string, text);
}

function solve(string, text) {

    let wordsToSplit = string.split(' ');
    let counter = 0;

    for (let word of wordsToSplit) {

        if (word === text) {

            counter++;
        }
    }
    console.log(counter);
}
main("This is a word and it also is a sentence","is");