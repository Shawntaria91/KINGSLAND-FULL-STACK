function main(nameParticlesAndCmds) {
    let particles = nameParticlesAndCmds.shift(); //shifting first element of array which is our weapon name
    let mainParticles = [];
    let commands = [];
    commands = nameParticlesAndCmds;
    //console.log(commands);
    mainParticles = particles.split('|'); // turn that first element into it's own array
    let cmdLength = commands.length; // generate the length of the remaining initial array- to give static value
    let moveItRight = [];
    for (i = 0; i < cmdLength; i++) { // lenght of commands- 1 or it could be<= to stop before "Done"
        if (commands[i].includes('Right')) { // looking for move right commands
            moveItRight = commands[i]; //shift off that command
            itemsToRight = moveItRight.split(' '); // turn command into an array
            numToRight = itemsToRight.pop(); //pop off last element in array and set to 0 in first case
            actualNumber = Number(numToRight); // turn string value of '0' in to number 0
            //console.log(mainArr);
            if (actualNumber >= 0 && actualNumber <= mainParticles.length - 2) {
                let a = mainParticles[actualNumber]; // mainArr position 0 = a so a = 'ha'
                let b = mainParticles[actualNumber + 1]; // mainArr position 1 = b so b = Do
                mainParticles[actualNumber] = b; // flop numbers a and b  mainArr position 0 = Do
                mainParticles[actualNumber + 1] = a; // mainArr position 1 = ha
                //console.log(a);
                //console.log(b);
                //index = thingImMovingRight.indexOf("Move Right");
                //console.log(mainArr);
            }
        } else if (commands[i].includes('Left')) { // looking for move left commands
            let thingImMovingLeft = commands[i]; //shift off that command
            leftArray = thingImMovingLeft.split(' '); // turn command into an array
            numOnLeft = leftArray.pop(); //pop off last element in array and set to 3 in first case
            digitLeft = Number(numOnLeft); // turn string value of '3' in to number 3
            if (digitLeft > 0 && digitLeft < mainParticles.length) {
                let a = mainParticles[digitLeft]; // mainArr position 3 = a so a = 'om'
                let b = mainParticles[digitLeft - 1]; // mainArr position 2 = b so b = mm
                mainParticles[digitLeft] = b; // flop numbers a and b  mainArr position 3 = mmm
                mainParticles[digitLeft - 1] = a; // mainArr position 2 = om
                //console.log(a);
                //console.log(b);
                //index r thingImMovingLeft.indexOf("Move Right");
                //console.log(mainArr);
            }
        } else if (commands[i].includes('Odd')) {
            let idxArr = [];
            for (j = 0; j < mainParticles.length; j++) {
                if (j % 2 != 0) {
                    idxArr.push(mainParticles[j]);
                }
            }
            console.log(idxArr.join(' '));
        } else if (commands[i].includes('Even')) {
            let idxArr = [];
            for (j = 0; j < mainParticles.length; j++) {
                if (j % 2 == 0) {
                    idxArr.push(mainParticles[j]);
                }
            }
            console.log(idxArr.join(' '));
        }
        weapon = mainParticles.join('');
    }
    console.log(`You crafted ${weapon}!`);
}
main(["ha|Do|mm|om|er", "Move Right 0", "Move Left 3", "Check Odd", "Move Left 2", "Move Left 10", "Move Left 0", "Done"]);