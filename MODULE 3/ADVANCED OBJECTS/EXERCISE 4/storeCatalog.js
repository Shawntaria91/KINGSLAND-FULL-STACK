/*
You have to create a sorted catalog of store products. 
You will be given an array of strings that contains the product's name and price. 
You need to group them by their initials and sort them in alphabetical order.

Input
The input comes as array of strings. 
Each element holds info about a product in the following format:
“{productName} : {productPrice}”
The product’s name will be a string, which will always start with a capital letter
the price will be a number.
You can safely assume there will be NO duplicate product input. 
The comparison for alphabetical order is caseinsensitive.

Output
As output, you must print all the products in a specified format. 
You must group and order them exactly as specified above. 
The group initials should be printed
their products should be printed below them with 2 spaces before their names.
*/
function main(items) {
    let products = {};
    // let sortedList = {};
    for (let product of items) {
        product = product.split(' : ');
        let item = product[0];
        let price = +product[1];
        products[item] = price; //builds object
    }
    products = Array.from(Object.entries(products)).sort(function(a, b) {
        let prodA = a[0].toUpperCase();
        let prodB = b[0].toUpperCase();
        if (prodA < prodB) {
            return -1; //nameA comes first
        }
        if (prodA > prodB) {
            return 1; // nameB comes first
        }
        return 0; // names must be equal
    });
    for (i = 0; i < products.length; i++) {
        let product = products[i].join(': ');
        let startingLetter = product[0];
        console.log(startingLetter);
        let j = i;
        while (product[0] == startingLetter) {
            console.log(`  ${product}`);
            j++;
            if (j < products.length) {
                product = products[j].join(': ');
            } else {
                break;
            }
        }
        i = j - 1;
    }
}
main([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);