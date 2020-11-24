// Write a function that keeps track of guests going to house party
// Given an array of string
// - "{name} is going!"
// - "{name} is not going!"
// If is going is received:
    // not on list, add the person. 
    //is on list, print "{name} is already in the list!"

// If not going is received: 
    // is on list, remove
    // is not on list, print "{name} is not in the list!"

    //At end, print all the guests, each on a separate line. 


function main(potentialPartier) {

    let output = [];

    for (let i = 0; i < potentialPartier.length; i++) {
        let tmpIndex = potentialPartier[i].indexOf(' '); 
        let name = potentialPartier[i].slice(0, tmpIndex); 
        let action = potentialPartier[i].slice(tmpIndex + 1); 

        if (action == 'is going!') {

            if (output.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                output.push(name); //adds Allie to the list
            }  
            
        } else if (action == 'is not going!') {

            if (output.includes(name)) {
                for (k = 0; k < output.length; k++) {
                    if (output[k] === name) {
                        output.splice(k, 1);
                    } else {
                        
                    }
                }
            } else {
                console.log(`${name} is not in the list!`);
            }  
            
        }
    }
    
    for (j = 0; j < output.length; j++) {
        console.log(output[j]);
    }
}
main(['Allie is going!','George is going!','John is not going!','George is not going!']);

/**
 * John is not in the list!
Allie
 */

