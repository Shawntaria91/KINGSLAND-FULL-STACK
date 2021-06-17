// 4. Command Processor
// Write a program that keeps a string inside its context and can execute different commands that modify or print the string on the console.

// append(string) - append the given string at the end of the internal string
// removeStart(n) - remove the first n characters from the string, n is an integer
// removeEnd(n) - remove the last n characters from the string, n is an integer
// print - print the stored string on the console

// Input
// Check the examples below to see how your code will be executed.
// Output
// Whenever you receive the command print, the output should be the printed on the console.

function main(arr) {
    let closure = (function() {
        let str = '';
        return {
            append: (s) => str += s,
            removeStart: (n) => str = str.substring(n),
            removeEnd: (n) => str = str.substring(0, str.length - n),
            print: () => console.log(str)
        }
    })();
    for (let st of arr) {
        let [comm, value] = st.split(' ');
        closure[comm](value);
    }
}
let firstZeroTest = main();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

// function procces(cmd) {
//     var command = (function() {
//         var txt = '';
//         return {
//             append: function(newTxt) {
//                 txt += newTxt;
//             },
//             removeStart: function(count) {
//                 txt = txt.slice(count);
//             },
//             removeEnd: function(count) {
//                 txt = txt.slice(0, txt.length - count);
//             },
//             print: function() {
//                 console.log(txt);
//             }
//         }
//     })();
//     for (var com of cmd) {
//         var [cmdName, arg] = com.split(' ');
//         command[cmdName](arg);
//     }
// }

// let firstZeroTest = solution();
// firstZeroTest.append('hello');
// firstZeroTest.append('again');
// firstZeroTest.removeStart(3);
// firstZeroTest.removeEnd(4);
// firstZeroTest.print()

// loa

// let secondZeroTest = solution();
// secondZeroTest.append('123');
// secondZeroTest.append('45');
// secondZeroTest.removeStart(2);
// secondZeroTest.removeEnd(1);
// secondZeroTest.print();

// 34


