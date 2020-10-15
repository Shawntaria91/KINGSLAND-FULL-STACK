//First input: string
//Second input array/list of commands
// Decrypt until 'Finish' command

function main(message, commands) {

    //split message into characters
    let characters = message.split('')
        .map(letter => letter.trim());
    //console.log(characters);

    let currentMessage = message;

    for (const index in commands) {

        const command = commands[index];
        let cmdParts = command.split(' ').filter(item => item.trim() != '');

        const opcode = cmdParts[0];
        const dataList = cmdParts.slice(1);

        if (opcode === 'Finish') {
            break;
        } else if (opcode === 'Replace' && dataList.length === 2) {
            const currentChar = dataList[0];
            const newChar = dataList[1];
            //const currentCharIndex = characters.indexOf(currentChar);

            currentMessage = message.split(currentChar).join(newChar);
            console.log(currentMessage);
        } else if (opcode === 'Cut' && dataList.length === 2) {
            const startIndex = Number(dataList[0]);
            const endIndex = Number(dataList[1]);

            if (startIndex >= 0 && startIndex < currentMessage.length &&
                endIndex >= 0 && endIndex < currentMessage.length) {
                currentMessage = currentMessage.slice(0, startIndex) + currentMessage.slice(endIndex+1, currentMessage.length);
                console.log(currentMessage);
            } else {
                console.log('Invalid indexes!');
            }

        } else if (opcode === 'Make' && dataList.length === 1) {
            const upperLower = dataList[0];

            if (upperLower == 'Upper') {
                currentMessage = currentMessage.toUpperCase();
                console.log(currentMessage);
            } else if (upperLower == 'Lower') {
                currentMessage = currentMessage.toLowerCase();
                console.log(currentMessage);
            }
        } else if (opcode === 'Check' && dataList.length === 1) {
            const string = dataList[0];

            let subString = currentMessage.includes(string);
            if (subString == true) {
                console.log(`Message contains ${string}`);
            } else {
                console.log(`Message doesn't contain ${string}`);
            }

        } else if (opcode === 'Sum' && dataList.length === 2) {
            const startIndex = dataList[0];
            const endIndex = dataList[1];
            let sum = 0;
            if (startIndex >= 0 && startIndex < currentMessage.length &&
                endIndex >= 0 && endIndex < currentMessage.length) {
                let subString = currentMessage.substr(startIndex, endIndex); //endIndex = length

                for (let i = 0; i < subString.length; i++) {
                    //let char = subString.charAt(i);
                    let value = subString.charCodeAt(i);
                    sum += value;
                }
                console.log(Number(sum));

            } else {
                console.log('Invalid indexes!');
            }


        }
    }
}
//main(`ILikeSharan`, [`Replace a e`, `Make Upper`, `Check SHEREN`, `Sum 1 4`, `Cut 1 4`, `Finish`]);
main('Nicholas',['Sum 1 3','Check kek','Finish']); // Expected Output: 308
                                                   // Message doesn't contain kek