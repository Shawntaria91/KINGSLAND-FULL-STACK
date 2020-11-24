// Write a function that composes an object by given properties. The input comes as an array of strings.
// Every even index of the array represents the name of the food. 
// Every odd index is a number that is equal to the calories in 100 grams of the given product. 
// Assign each value to its corresponding property and
// print it on the console.
// The input comes as an array of string elements.
// The output should be printed on the console.



function main(arrOfStr) {

    let obj = {};

    for (let i = 0; i < arrOfStr.length; i += 2) {

        obj[arrOfStr[i]] = arrOfStr[i + 1];
    }
    console.log(obj);
}
main(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);
main(['Yoghurt', 48, 'Rice', 138, 'Apple', 52]);