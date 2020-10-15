function main(cardsAndCommands) {
    arrayManipulations(cardsAndCommands);
}
function arrayManipulations(cardsAndCommands) {
    /* [`Innervate:Moonfire:Pounce:Claw:Wrath:Bite`,
    `Add Moonfire`,
    `Add Pounce`,
    `Add Bite`,
    `Add Wrath`,
    `Insert Claw 0`,
    `Swap Claw Moonfire`,
    `Remove Bite`,
    `Shuffle deck`,
    `Ready`
    ] */
    let cards = cardsAndCommands.shift().split(':'); //['Innervate', 'Moonfire', 'Pounce', 'Claw', 'Wrath', 'Bite']
    let newArr = [];
    for (i = 0; i < cardsAndCommands.length - 1; i++) {
        let command = cardsAndCommands[i].split(' '); //['Add', 'Moonfire']
        let cmd = command[0];
        let currCard = command[1];
        let currIdx = command[2];
        let idxNum = Number(currIdx);
        //let card = cards[i];
        switch (cmd) {
            case "Add":
                if (!cards.includes(currCard)) {
                    console.log('Card not found.');
                } else {
                    newArr.push(currCard);
                }
                //console.log(newArr);
                break;
            case "Insert":
                if (!cards.includes(currCard)) {
                    console.log('Error!');
                } else {
                    if (newArr[idxNum] == undefined) {
                        console.log('Error!');
                    } else {
                        newArr.splice(idxNum, 0, currCard);
                    }
                }
                //console.log(newArr);
                break;
            case "Remove":
                if (!newArr.includes(currCard)) {
                    console.log("Card not found.");
                } else {
                    remCurr = newArr.indexOf(currCard);
                    newArr.splice(remCurr, 1);
                    //console.log(newArr);
                }
                break;
            case "Swap":
                firstPos = newArr.indexOf(currCard);
                secPos = newArr.indexOf(currIdx);
                let a = currCard; // mainArr position 0 = a so a = 'ha'
                let b = currIdx; // mainArr position 1 = b so b = Do
                newArr[firstPos] = b; // flop numbers a and b  mainArr position 0 = Do
                newArr[secPos] = a; // mainArr position 1 = ha
                //console.log(newArr);
                break;
            case "Shuffle":
                newArr.reverse();
                //console.log(newArr);
                break;
        }
    }
    console.log(newArr.join(' '));
}