// Write a function that displays information about the arguments which are passed to it (type and value) 
// and a summary about the number of each type in the following format:
// "{argument type}: {argument value}"

// Print each argument description on a new line. 
// At the end print a tally with counts for each type in descending order, 
// each on a new line in the following format:
// "{type} = {count}"

// If two types have the same count, use order of appearance.
// Do NOT print anything for types that do not appear in the list of arguments.

// Input
// You will receive a series of arguments passed to your function.

// Output
// Print on the console the type and value of each argument passed into your function.

function main(arg1, arg2, arg3) {

    let argArr = [arg1,arg2, arg3];

    let count = {};

    argArr.map(arg => console.log(`${typeof(arg)}: ${arg}`));
    argArr.map(arg => count[typeof(arg)] ? count[typeof(arg)]++ : count[typeof(arg)] = 1);

    Object.keys(count).sort((a, b) => count[b] - count[a]).map(x => console.log(`${x} = ${count[x]}`));
}
main(true, null, undefined);

/**boolean: true
object: null
undefined: undefined
boolean = 1
object = 1
undefined = 1 */