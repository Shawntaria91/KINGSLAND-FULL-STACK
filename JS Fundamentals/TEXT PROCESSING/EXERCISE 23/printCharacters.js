// Write a function that receives a string and prints all the characters on separate lines.

function main(string) {

    solve(string);
}

function solve(string) {

    for (let char of string) {

        console.log(char);
    }
}
main('AWord');