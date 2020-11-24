function main(words) {

    let wordWithHighValue = 0;
    let word = words.shift();
    let winner = "";

    while (word != "STOP" && word != undefined) {
        let value = 0;
        for (let i = 0; i < word.length; i++) {
            value += word.charCodeAt(i);
        }
        if (wordWithHighValue < value) {
            wordWithHighValue = value;
            winner = word;
        }
        word = words.shift();
    }
    console.log(`Winner is ${winner} - ${wordWithHighValue}!`);
}
main(["House", "Dog", "Destination", "STOP"]);