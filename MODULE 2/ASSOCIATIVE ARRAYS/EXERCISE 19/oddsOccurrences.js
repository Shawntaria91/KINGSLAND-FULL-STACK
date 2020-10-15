// Write a function that extracts all the elements of a sentence that occurred odd number of times (case-insensitive)

// The input comes as a single string. The words will be separated by a single space.



function main(sentence) { 

    oddOccurences(sentence);
}

function oddOccurences(sentence) {

    let map = new Map();
    
    sentence = sentence.split(' ');

    for (let string of sentence) {

        let counter = 1;

        if (map.has(string.toLowerCase())) {

            let wordCount = map.get(string.toLowerCase());

            map.set(string.toLowerCase(), wordCount + 1);
        } else {

            map.set(string.toLowerCase(), counter);
        }
    }
    let tempArr = Array.from(map);
    let result = '';

    for (i = 0; i < tempArr.length; i++) {

        if (tempArr[i][1] % 2 != 0) {

            result += tempArr[i][0] + ' ';
        }
    }
    console.log(result);
}