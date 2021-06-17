// 5. Count Words in a Text
/*
You are tasked to count the number of words in a text using an object as an associative array. Any combination of letters, digits and _ (underscore) should be counted as a word. The words should be stored in the object as properties - the key being the word and the value being the amount of times the word is contained in the text.

Input
The input comes as an array of strings containing one entry - the text whose words should be counted. The text may
consist of more than one sentence.
Output
The output should be printed on the console - the JSON representation of the object containing the words.
*/
function main(strArr) { //['Far too slow, you're far too slow.']
    //const regex = /\w+/g; 
    let mObj = {};
    match = strArr.match(/\w+/g);
    //strArr = match.split(' ');
    //console.log(strArr);
    //str.replace(regex);//['Far', 'too', 'slow', 'you', 're', 'far', 'too', 'slow', '']
    console.log(strArr);
   
    for (let word of strArr) {
        if (mObj[word]) {
            mObj[word]++;
        } else {
            mObj[word] = 1;
        }
    }
    console.log(JSON.stringify(mObj));
}
// main(["JS devs use Node.js for server-side JS.-- JS for devs"]
// );
////{"JS":3,"devs":2,"use":1,"Node":1,"js":1,"for":2,"server":1,"side":1}
main(["Far too slow, you're far too slow."]
);
//{"Far":1,"too":2,"slow":2,"you":1,"re":1,"far":1}


