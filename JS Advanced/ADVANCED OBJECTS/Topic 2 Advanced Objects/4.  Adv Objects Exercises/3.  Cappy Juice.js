/*3. Cappy Juice

The input comes as an array of strings and each element contains juice and its quantity. Count the number of
bottles that every juice can produce and print them.
Note: Multiple elements may contain the same juice and their quantity must be combined. Every 1000 quantity of
juice is one bottle. Any excess or remainder after producing a bottle should be stored to use it later when another
data with the same juice is received.
Example: You have 2643 quantity of Orange Juice – this is 2 bottles of Orange Juice and 643 quantity left.
Input
The input comes as array of strings. Each element holds the data about a juice and quantity in the following format:
“{juiceName} => {juiceQuantity}”
Output
The output is the produced bottles. The bottles are to be printed in order of obtaining the bottles. Check the
second example bellow - even though we receive the Kiwi juice first, we can’t form a bottle of Kiwi juice until the 4th
line, at which point we have already created Pear and Watermelon juice bottles; thus, the Kiwi bottles appear last in
the output.
*/
function main(input) {
    let saveJuices = new Map();
    let lessThan1000 = new Map();
    // let result = new Map;
    for (let juice of input) { //['Kiwi => 234', 'Pear => 2345', 'Watermelon => 3456', 'Kiwi => 4567', 'Pear => 5678', 'Watermelon => 6789']
        let splitString = juice.split(/\s*[=>]\s*/g);
        let juiceName = splitString[0];
        let quantity = Number(splitString[2]);

        if (lessThan1000.has(juiceName)) {
            let getValue = lessThan1000.get(juiceName);
            lessThan1000.set(juiceName, quantity + getValue);

            if (lessThan1000.get(juiceName) >= 1000) {
                let bottles = Math.floor(lessThan1000.get(juiceName) / 1000);
                let excessJuice = lessThan1000.get(juiceName) - bottles * 1000;
                if (saveJuices.has(juiceName)) {
                    saveJuices.set(juiceName, saveJuices.get(juiceName) + bottles);
                    lessThan1000.set(juiceName, excessJuice);

                } else {
                    saveJuices.set(juiceName, bottles);
                    lessThan1000.set(juiceName, excessJuice);
                }
            }
            
        } else {
            lessThan1000.set(juiceName, quantity);
            if (lessThan1000.get(juiceName) >= 1000) {
                let bottles = Math.floor(lessThan1000.get(juiceName) / 1000);
                let excessJuice = lessThan1000.get(juiceName) - bottles * 1000;
                saveJuices.set(juiceName, bottles);
                lessThan1000.set(juiceName, excessJuice);
            }
        }
    }
    for (let el of saveJuices) {
        console.log(`${el[0]} => ${el[1]}`);
    }

}

//main(['Kiwi => 234', 'Pear => 2345', 'Watermelon => 3456', 'Kiwi => 4567', 'Pear => 5678', 'Watermelon => 6789']);
// Pear => 8
// Watermelon => 10
// Kiwi => 4
main(['Orange => 2000', 'Peach => 1432', 'Banana => 450', 'Peach => 600', 'Strawberry => 549']);
// Orange => 2
// Orange => 2
// Orange => 2
// Peach => 2
//(/\s*[=>]\s*/g)    //(/\s*[=>]\s*/g)    //(/\s*[=>]\s*/g)    //(/\s*[=>]\s*/g)    //(/\s*[=>]\s*/g)    //(/\s*[=>]\s*/g)    //(/\s*[=>]\s*/g)    //(/\s*[=>]\s*/g)    //(/\s*[=>]\s*/g)    //(/\s*[=>]\s*/g)    //(/\s*[=>]\s*/g)    //(/\s*[=>]\s*/g)    //(/\s*[=>]\s*/g)    //(/\s*[=>]\s*/g)    //(/\s*[=>]\s*/g)    //(/\s*[=>]\s*/g)    //(/\s*[=>]\s*/g)    //(/\s*[=>]\s*/g)    //(/\s*[=>]\s*/g)    //(/\s*[=>]\s*/g)