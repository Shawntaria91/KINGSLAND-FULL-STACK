// Write a function that receives a text as a first parameter and a single word as a second. Find all occurrences of that

// word in the text and replace them with the corresponding count of '*'.

function main(text, word) {

    solve(text, word);
}

function solve(text, word) {

    let censoredWord = text.replace(word,'*'.repeat(word.length));

    while (censoredWord.includes(word)) {

        censoredWord = censoredWord.replace(word,'*'.repeat(word.length));
    }
    console.log(censoredWord);
}
main("A small sentence with some words","small");