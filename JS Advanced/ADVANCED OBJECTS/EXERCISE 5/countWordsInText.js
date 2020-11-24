/*
You are tasked to count the number of words in a text using an object as an associative array. 
Any combination of letters, digits and _ (underscore) should be counted as a word. 
The words should be stored in the object as properties 
- the key being the word and 
the value being the amount of times the word is contained in the text.

Input
The input comes as an array of strings containing one entry - the text whose words should be counted. 
The text may consist of more than one sentence.

Output
The output should be printed on the console - the JSON representation of the object containing the words.
*/
function main(textToCount) {
    countTheWord(textToCount);
}
function countTheWord(textToCount) {
    let result = {};
    for (const str of textToCount) { //["JS devs use Node.js for server-side JS.-- JS for devs"]
        let sameWordCount = str.match(/\w+/g);
        //['JS', 'devs', 'use', 'Node', 'js', 'for', 'server', 'side', 'JS', 'JS', 'for', 'devs']
        for (const word of sameWordCount) {
            //filling object, setting key (word) and value (count by setting it to 1 or ++ if word is found)
            if (result[word]) {
                result[word]++; //if the word exists in "result object", increment value
            } else {
                result[word] = 1; //if the word does not exist in object, set to 1
            }
        }
    }
    console.log(JSON.stringify(result)); //stringify
}
main(["Far too slow, you're far too slow."]);