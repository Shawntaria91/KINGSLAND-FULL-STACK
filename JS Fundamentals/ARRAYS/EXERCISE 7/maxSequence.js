//longest sequence of equal elements in the array
//If more than 1, choose leftmost one. 

function main(arrayIn) {
    let winningSequenceNum = 0; 
    let winningSequenceCount = 0; 
    let currentNewSeqNum = -Infinity; //number that we are currently looking at to see if it wins
    let amountOfCurrentNewSeqNum = 0; 
    for (i = 0; i < arrayIn.length; i++) {
        let foundAnotherSeqNum = false; 
        
        if (currentNewSeqNum == arrayIn[i]) { //if the item in the array equals the one I am currently looking at
            foundAnotherSeqNum = true;
            amountOfCurrentNewSeqNum++;
        }
        if (!foundAnotherSeqNum) { 
            currentNewSeqNum = arrayIn[i];
            amountOfCurrentNewSeqNum = 1;
        } else if (amountOfCurrentNewSeqNum > winningSequenceCount) { 
            winningSequenceCount = amountOfCurrentNewSeqNum;
            winningSequenceNum = currentNewSeqNum;
        }
    }
    let output = "";
    for (let i = 0; i < winningSequenceCount; i++) {
        output += `${winningSequenceNum} `;
    }
    console.log(output.trim());
}
main([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);