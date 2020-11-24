// First input: alreadyOwnedTanks on a single line separated by ","
// Second Input: numOfCommands - int
// Third Input: commands

function main(alreadyOwnedTanks, numOfCommands, commands) {

    let ownedTankList = alreadyOwnedTanks.split(',')
                        .map(ownedTank=>ownedTank.trim());
    
    for (const index in commands) {
        const command = commands[index];
        let cmdParts = command.split(', ').filter(item=>item.trim()!='');
        //TODO: ensure that command parts have at least one element else continue
        //console.log(cmdParts);
        
        const opcode = cmdParts[0];
        const dataList   = cmdParts.slice(1);
    
        //decide on what to do based on the opcode
        if (opcode === 'Add' && dataList.length === 1) {
            //
            const tankName = dataList[0];
            const tankNameIndex = ownedTankList.indexOf(tankName);

            //if not owned, add it and say bought
            if (tankNameIndex === -1) {
                console.log("Tank successfully bought");
                ownedTankList.push(tankName);

            // if found, say already bought
            } else {
                console.log('Tank is already bought');
            }
        } else if (opcode === 'Remove' && dataList.length === 1) {
           
            const tankName = dataList[0];
            //Check if tank owned
            const tankNameIndex = ownedTankList.indexOf(tankName);
            
            //Execute if owns tank
            if (tankNameIndex !== -1) {
                console.log('Tank successfully sold');
                ownedTankList.splice(tankNameIndex,1);
            } else {
                //If he does not own the tank
                console.log('Tank not found');
            } 
        } else if (opcode === 'Remove At' && dataList.length === 1) {

            const index = Number(dataList[0]);

            //Check if index is in range of list
            if (index >= 0 && index < ownedTankList.length) {
                ownedTankList.splice(index,1);
                console.log('Tank successfully sold');
            } else {
                console.log('Index out of range');
            }

        }else if (opcode === 'Insert' && dataList.length === 2) {

            const index = Number(dataList[0]);
            const tankName = dataList[1];
            const tankNameIndex = ownedTankList.indexOf(tankName);

            if (index >= 0 && index < ownedTankList.length) {

                if (tankNameIndex === -1) {

                    //add the tank at given index 
                    ownedTankList.splice(index, 0, tankName);
                    console.log('Tank successfully bought');
                } else {
                    console.log('Tank is already bought');
                }
            } else {
                console.log('Index out of range');
            }
        }
    }
    console.log(ownedTankList.join(', ').trim());
}
//main(`T-34-85 Rudy, SU-100Y, STG`, 3, [`Add, King Tiger(C)`, `Insert, 2, IS-2M`, `Remove, T-34-85 Rudy`]);
main("T 34, T 34 B, T92, AMX 13 57",4,["Add, T 34","Remove, AMX CDC","Insert, 10, M60","Remove At, 1"]);
