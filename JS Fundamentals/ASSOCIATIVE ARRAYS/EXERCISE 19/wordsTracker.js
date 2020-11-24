// 1. Words Tracker

// Write a function that receives an array of words and finds occurrences of given words(case-sensitive) in that

// sentence.

// The input will come as an array of strings. The first string will contain the words you will be looking for separated by

// a space. All strings after that will be the words you will be looking for.

// Print for each word how many times it occurs. The words should be sorted by count in descending.



function main(wordList) {

    let result = search(wordList);

    for (i = 0; i < result.length;i += 2) {

        console.log(`${result[i]} - ${result[i + 1]}`);
    }
}

function search(wordList) {

    let words = wordList.shift().split(' ');
    let returnWordList = [];
    let wordCount = 0;

    for (i = 0; i < words.length; i++) {

        for (j = 0; j < wordList.length; j++) {

            if (words[i] == wordList[j]) {

                wordCount++;
            }
        }
        returnWordList.push(words[i]);
        returnWordList.push(wordCount);
        wordCount = 0;
    }

    let newWordList = [];
    let arrLength = returnWordList.length;

    for (i = 1; i < arrLength; i += 2) {

        let max = returnWordList[1];

        for (j = 1; j < returnWordList.length; j += 2)

            if (max < returnWordList[j]) {

                max = returnWordList[j];
            }
            newWordList.push(returnWordList[returnWordList.indexOf(max) - 1]);
            newWordList.push(returnWordList[returnWordList.indexOf(max)]);
            returnWordList.splice(returnWordList.indexOf(max) - 1, 2);
        }
        return newWordList;
    }
