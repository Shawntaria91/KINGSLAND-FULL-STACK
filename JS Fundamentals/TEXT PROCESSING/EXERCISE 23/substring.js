// Write a function that receives a string and two numbers. The numbers will be a starting index and count of

// elements to substring. Print the result.

function main(str, startIndex, count) {

    solve(str, startIndex, count);
}

function solve(string, startIndex, count) {

    let output = string.substr(startIndex, count);
    console.log(output);
}
main("ASentence", 1, 8);