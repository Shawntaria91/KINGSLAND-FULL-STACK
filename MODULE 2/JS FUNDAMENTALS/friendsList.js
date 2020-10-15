// create a program that finds the names that are lost
// and send out a report on it
// first input will: contain usernames
// next input lines until report: commands
// When you hit Report, send out report. 

function main(usernames, commands) {
    //breaking usernames into an array
    let friendList = usernames.split(',')
                        .map(name=>name.trim());
    let blacklistedNamesCount = 0;
    let lostNamesCount = 0;

    //walking through the commands and execute each one
    for (const index in commands) {
        const command = commands[index];
        let cmdParts = command.split(' ').filter(item=>item.trim()!='');
        //TODO: ensure that command parts have at least one element else continue
        //console.log(cmdParts);
        
        const opcode = cmdParts[0];
        const dataList   = cmdParts.slice(1);
        
        //decide on what to do based on the opcode
        if (opcode === 'Blacklist' && dataList.length === 1) {
            //TODO: execute action here
            //1. find the Name
            const name = dataList[0];
            const nameIndex = friendList.indexOf(name);
            if ( nameIndex !== -1) {
                //2. blacklist name if found
                //change name to 'Blacklisted
                friendList[nameIndex] = 'Blacklisted';
                blacklistedNamesCount++;
                console.log(`${name} was blacklisted.`);
                //3. if not found tell user
            } else {
                console.log(`${name} was not found.`);
            }
            
        //decide on what to do based on the opcode   
        }else if (opcode === 'Error' && dataList.length === 1) {
            //TODO: execute action here
            //1. check if the username at the given index is not 'Blacklisted' or 'Lost'
            const index = Number(dataList[0]);
            const name = friendList[index];
            if (name !== 'Blacklisted' && name !== 'Lost') {
                //If not blacklisted or lost, change name to Lost
                friendList[index] = 'Lost';
                lostNamesCount++;
                console.log(`${name} was lost due to an error.`);
            }

            
        // Decide on wha tto do based on opcode
        }else if (opcode === 'Change' && dataList.length === 2){
            // check if user at index position in range of the array
            const index = Number(dataList[0]);
            const currentName = friendList[index];
            const newName = dataList[1];
            //Check range
            if (index >= 0 && index < friendList.length){
                friendList[index] = newName;
                console.log(`${currentName} changed his username to ${newName}.`);
            }
        }else if (opcode === 'Report'){
            //print count of blacklisted names
            console.log(`Blacklisted names: ${blacklistedNamesCount}`);
            //print count of lost names
            console.log(`Lost names: ${lostNamesCount}`);
            //print friendlist separated by a single space
            console.log(friendList.join(' '));
            
        }
        else {
            console.error(`Invalid command ${command}`);
        }
    }
    //console.log(friendList);
}
//main(`Mike, John, Eddie`, [`Blacklist Mike`, `Error 0`, `Error 1`, `Change 2 Mike123`, `Report`]);
main(`Mike, John, Eddie, William`, [`Error 3`, `Error 3`, `Change 0 Mike123`, `Blacklist Eddie`, `Report`]);

// Expected Output:
// Mike was blacklisted. 
// John was lost due to an error. 
// Eddie changed his username to Mike123. 
// Blacklisted names: 1
// Lost names: 1
// Blacklisted Lost Mike123