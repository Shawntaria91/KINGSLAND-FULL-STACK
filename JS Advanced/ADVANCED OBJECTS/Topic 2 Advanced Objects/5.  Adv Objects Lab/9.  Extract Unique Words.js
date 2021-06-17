//9. Extract Unique Words
/*
Write a JS function that extracts all UNIQUE words from a valid text and stores them. Ensure that there are NO
duplicates in the stored words. Once you find a word, there is no need for you to store it again if you meet it again in the text. You also need to make all characters from the words you’ve stored into lowercase.
The input comes as array of strings. Each element will represent a sentence.
The output is all of the unique words you’ve found, each with each, separated by a coma and a space, printed in
order of appearance.
*/
function main(arr) {
    extractWordsRegex(arr);
}

function extractWordsRegex(arr) {
    let uniqueWordsExtract = new Set();
    for (let str of arr) {
        let wordsArr = str.toLowerCase().split(/\W+/m);
        for (let word of wordsArr) {
            uniqueWordsExtract.add(word);
        }
    }
    let uniqueWordsArray = [];
    for (let str of uniqueWordsExtract) {
        if (str.length >= 1) {
            uniqueWordsArray.push(str);
        }
    }
    console.log(uniqueWordsArray.join(', '));
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Alternative Solution:





// Input
/*
['Interdum et malesuada fames ac ante ipsum primis in
faucibus.',
'Vestibulum volutpat lacinia blandit.',
'Pellentesque dignissim odio in hendrerit lacinia.',
'Vivamus placerat porttitor purus nec hendrerit.',
'Aliquam erat volutpat. Donec ac augue ligula.',
'Praesent venenatis sapien vitae libero ornare, nec pulvinar
velit finibus.',
'Proin dui neque, rutrum vel dolor ut, placerat blandit sapien.',
'Pellentesque at est arcu.',
'Nullam eget orci laoreet, feugiat nisi vitae, egestas libero.',
'Pellentesque pulvinar aliquet felis.',
'Interdum et malesuada fames ac ante ipsum primis in
faucibus.',
'Etiam sit amet nisl ex.',
'Sed lacinia pretium metus quis fermentum.',
'Praesent a ante suscipit, efficitur risus cursus, scelerisque
risus.']
*/
// Output
/*
interdum, et, malesuada, fames, ac, ante, ipsum,
primis, in, faucibus, vestibulum, volutpat, lacinia,
blandit, pellentesque, dignissim, odio, hendrerit,
vivamus, placerat, porttitor, purus, nec, aliquam,
erat, donec, augue, ligula, praesent, venenatis,
sapien, vitae, libero, ornare, pulvinar, velit, finibus,
proin, dui, neque, rutrum, vel, dolor, ut, at, est,
arcu, nullam, eget, orci, laoreet, feugiat, nisi,
egestas, aliquet, felis, etiam, sit, amet, nisl, ex, sed,
pretium, metus, quis, fermentum, a, suscipit,
efficitur, risus, cursus, scelerisque
*/