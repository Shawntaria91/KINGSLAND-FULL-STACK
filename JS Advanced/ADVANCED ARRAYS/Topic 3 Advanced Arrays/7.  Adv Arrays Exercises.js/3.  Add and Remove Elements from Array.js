// 3. Add and Remove Elements from an Array
// Write a JS function that adds and removes numbers to / from an array. You will receive a command which
// can either be "add" or "remove".
// The initial number is 1. Each input command should increase that number, regardless of what it is.
// Upon receiving an "add" command you should add the current number to your array.
// Upon receiving the "remove" command you should remove the last entered number, currently existent in
// the array.
// The input comes as an array of strings. Each element holds a command.
// The output is the array itself, with each element printed on a new line. In case of an empty array, just print
// "Empty".

function main(input) {
    let result = [];
    let number = 1;
    for (let command of input) {
        if (command == "add") {
            result.push(number);
        } else {
            result.pop();
        }
        number++;
    }
    if (result.length == 0) {
        console.log("Empty");
    } else {
        result.forEach(element => console.log(element));
    }
}
main([
    'add',
    'add',
    'add',
    'add'
]);
// 1
// 2
// 3
// 4
// main([
//     'add',
//     'add',
//     'remove',
//     'add',
//     'add'
// ]);
// 1
// 4
// 5
// main([
//     'remove',
//     'remove',
//     'remove'
// ]);
// Empty
