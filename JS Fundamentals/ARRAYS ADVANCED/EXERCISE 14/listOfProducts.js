// You will receive an array of products. 
// Print a numbered array of all the products ordered by name. 

function main(arr) {

    let i = 1;

    arr.sort().map((x) => {
        console.log(`${i}.${x}`);
        i++;
    });
}
main(["Potatoes", "Tomatoes", "Onions", "Apples"]);