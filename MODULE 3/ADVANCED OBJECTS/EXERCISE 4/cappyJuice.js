/*
The input comes as an array of strings and 
each element contains juice and its quantity. 
Count the number of bottles that every juice can produce and print them.
Note: Multiple elements may contain the same juice and their quantity must be combined. 
Every 1000 quantity of juice is one bottle. 
Any excess or remainder after producing a bottle should be stored to use it later when another
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
    let juice = {};
    let bottles = {};
    input.forEach((item) => {
        let [name, qty] = item.split(' => ');
        qty = Number(qty);
        if (!juice.hasOwnProperty(name)) {
            juice[name] = 0;
        }
        juice[name] += qty;
        let currQty = juice[name];
        if (currQty >= 1000) {
            bottles[name] = Math.trunc(currQty / 1000);
        }
    });
    let keys = Object.keys(bottles);
    for (let name of keys) {
        let qty = bottles[name];
        console.log(`${name} => ${qty}`);
    }
}
main(['Kiwi => 234', 'Pear => 2345', 'Watermelon => 3456', 'Kiwi => 4567', 'Pear => 5678', 'Watermelon => 6789']);