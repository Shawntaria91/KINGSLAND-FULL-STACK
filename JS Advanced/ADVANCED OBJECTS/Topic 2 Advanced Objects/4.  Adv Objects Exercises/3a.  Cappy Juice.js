/*3. Cappy Juice

Note: Multiple elements may contain the same juice and their quantity must be combined. 
Every 1000 quantity of juice is one bottle. 
Any remainder after producing a bottle should be stored and added when another data with the same juice is received.
Example: You have 2643 quantity of Orange Juice – this is 2 bottles of Orange Juice and 643 quantity left.

Input
The input comes as array of strings. Each element holds the data about a juice and quantity in the following format:
“{juiceName} => {juiceQuantity}”

Output
The output is the produced bottles. The bottles are to be printed in order of obtaining the bottles. Check the
second example below - even though we receive the Kiwi juice first, we can’t form a bottle of Kiwi juice until the 4th
line, at which point we have already created Pear and Watermelon juice bottles; thus, the Kiwi bottles appear last in
the output.
*/

// function main(arr){
//     addValuesUpToXOrderedOutput(arr);
// }
// function addValuesUpToXOrderedOutput(arr){

// }
function createMap(arr){
    let juiceProcessMap = new Map();
    let bottleMap = new Map();

    for (let token of arr){
        let juiceData = token.split(' ');// ['Orange', '=>', '2000']
        let juice = juiceData[0];
        let quantity = juiceData[2];
    }
    if(!juiceMap.has(juice)){
        juiceMap.set(juice, quantity);
    }else{
        juiceMap.get(juice).set(juice, quantity)
    }
        
    }
}
//main(['Kiwi => 234', 'Pear => 2345', 'Watermelon => 3456', 'Kiwi => 4567', 'Pear => 5678', 'Watermelon => 6789']);
// Pear => 8
// Watermelon => 10
// Kiwi => 4
createMap(['Orange => 2000', 'Peach => 1432', 'Banana => 450', 'Peach => 600', 'Strawberry => 549']);
// Orange => 2
// Orange => 2
// Orange => 2
// Peach => 2