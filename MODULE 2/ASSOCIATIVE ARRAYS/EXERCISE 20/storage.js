// Write a function that takes a certain number of items and their quantity. If the same item appears more than once,

// add the new amount to the existing one. . At the end print all the items and their amount without sorting them. The

// input comes as an array of strings. Try using a Map().



function main(arr) {

    solve(arr);
}

function solve(arr) {

    let map = new Map();

//Loop through the array, split into tokens and create variables for each one:

    for (let item of arr) {

//for (let 'tomatoes 10' of ['tomatoes 10','coffee 5','olives 100','coffee 40']
        let sepItems = item.split(' ');
//['tomatoes', '10']

        let singleItem = sepItems[0];
//tomatoes
        let qty = Number(sepItems[1]);

        if (!map.has(singleItem)) {
//if map does NOT have the product we are currently at:
            map.set(singleItem, qty); 
//set it to the given quantity 
        } else {

//if product exists, we get the existing quantity, we add new quantity and set the product quantity to the new one
            let currQuantity = map.get(singleItem);
            let updatedQty = currQuantity += qty;

            map.set(singleItem, updatedQty);
        }
    }

//print the result:

//Each key-value pair is an array of 2 elements(the key and the value), so we use for-of loop and print the key and the value
    for (let itemCount of map) {

        console.log(`${itemCount[0]} -> ${itemCount[1]}`);
    }

}
main([

'tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40'

]);