/*
Write a JS function that extracts all UNIQUE words from a valid text and stores them. 
Ensure that there are NO duplicates in the stored words. Once you find a word, 
there is no need for you to store it again if you meet it again in the text. 
You also need to make all characters from the words you’ve stored into lowercase.

The input comes as array of strings. Each element will represent a sentence.
The output is all of the unique words you’ve found, 
each with each, separated by a coma and a space, printed in order of appearance.
*/
function main(validText) {
    let uniqueWords = new Set();
    for (let str of validText) {
        let wordsInText = str.toLowerCase().split(/\W/).filter(x => x !== '');
        for (let word of wordsInText) {
            uniqueWords.add(word);
        }
    }
    let uniqueWordsList = [];
    for (str of uniqueWords) {
        uniqueWordsList.push(str);
    }
    console.log(uniqueWordsList.join(', '));
}
main(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
'Pellentesque quis hendrerit dui.',
'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquamut.',
'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'] 
);