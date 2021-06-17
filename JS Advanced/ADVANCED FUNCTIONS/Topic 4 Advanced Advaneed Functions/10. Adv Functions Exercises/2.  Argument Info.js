// 2. Argument Info
// Write a function that displays information about the arguments which are passed to it (type and value) and a
// summary about the number of each type in the following format:
// "{argument type}: {argument value}"
// Print each argument description on a new line. At the end print a tally with counts for each type in descending
// order, each on a new line in the following format:
// "{type} = {count}"
// If two types have the same count, use order of appearance.
// Do NOT print anything for types that do not appear in the list of arguments.
// Input
// You will receive a series of arguments passed to your function.
// Output
// Print on the console the type and value of each argument passed into your function.



function main(arg1, arg2, arg3) {
    let argumentArr = [arg1, arg2, arg3];
    let countsObj = {};
    
    argumentArr.map(arg => console.log(`${typeof(arg)}: ${arg}`));

    argumentArr.map(arg => countsObj[typeof(arg)] ? countsObj[typeof(arg)]++ : countsObj[typeof(arg)] = 1);

    Object.keys(countsObj).sort((a, b) => countsObj[b] - countsObj[a]).map(k => console.log(`${k} = ${countsObj[k]}`));
}

main(true, null);
// boolean: true
// object: null
// undefined: undefined
// boolean = 1
// object = 1
// undefined = 1

//main('cat', 42, function() { console.log('Hello world!'); });

// string: cat
// number: 42
// function: function () { console.log('Hello world!'); }
// string = 1
// number = 1
// function = 1