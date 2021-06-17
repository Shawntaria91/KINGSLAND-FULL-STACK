// 2. Even Position Element
// Write a function that finds the elements at even positions in an array.
// The input comes as an array of string elements.
// The output is the return value of your function. Collect all elements in a string separated by a space.
function main(arrOfStrings){
    evenIndexByModulus(arrOfStrings);
}

function evenIndexByModulus(arrOfStrings) {
    let result = [];
    for (let i in arrOfStrings) {
        if (i % 2 == 0) {
            result.push(arrOfStrings[i]);
        }
    }
    console.log(result.join(" "));
}
main(['20', '30', '40']);
// 20 40

main(['5', '10']);
// 5



