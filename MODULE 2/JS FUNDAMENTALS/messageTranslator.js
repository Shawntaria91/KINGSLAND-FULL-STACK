// checks if inputs have valid command AND message
// encrypt message
// first input: 

function main(msgCount, messages) {
    const validationRegex = /^!(?<command>[A-Z][a-z]{2,})!:\[(?<message>[a-zA-Z]{7,})\]/gm;
    for (let msgIdx = 0; msgIdx < msgCount; msgIdx++) {
        const message = messages[msgIdx];
        //separating command from message and validate   
        const match = validationRegex.exec(message);
        if (match === null) {
            console.log("The message is invalid");
            continue; //Continues with the next item we are iterating
        }
        const groups = match.groups;
        //encrypt data
        const asciiMsgArr = [];
        for (const charIdx in groups.message) {
            asciiMsgArr.push(groups.message.charCodeAt(charIdx));
        }
        const ciphertext = `${groups.command}: ${asciiMsgArr.join(' ')}`;
        console.log(ciphertext);
    }
}
main(2,[`!Send!:[IvanisHere]`,`*Time@:[Itis5amAlready]`]);