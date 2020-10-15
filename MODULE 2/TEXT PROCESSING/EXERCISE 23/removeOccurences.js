// Write a function that receives a text and a word to remove all occurrences of it inside the text.

function main(word, text) {

    solve(word, text);
}

function solve(word, text) {

    let initial;

    while (initial !== text) {

        initial = text;
        text = text.replace(word,'');
    }
    console.log(text);
}
solve('ice',
'kicegiciceeb');