// Write a function that counts the times each word occurs in a text. Print the words sorted by count in descending

// order. The input comes as an array of strings.



function main(strArr) {

    let map = new Map(), wordList = [];

    for (let string of strArr) {

        let counter = 1;

        if (map.has(string)) {

            let wordCount = map.get(string);

            map.set(string, wordCount + 1);
        } else {

            map.set(string, counter);
        }
    }

    wordList = Array.from(map).sort((a, b) => b[1] - a[1]);
    wordList.forEach(word => {

        console.log(`${word[0]} -> ${word[1]} times`);
    });
}

main(["Here",
"is", 
"the", "first", 
"sentence", "Here",
"is", 
"another", "sentence",
"And", 
"finally", "the", 
"third", "sentence"]);