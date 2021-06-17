// 4. Store Catalog
/*
You have to create a sorted catalog of store products. You will be given an array of strings that contains the
product's name and price. You need to group them by their initials and sort them in alphabetical order.
Input
The input comes as array of strings. Each element holds info about a product in the following format:
“{productName} : {productPrice}”
The product’s name will be a string, which will always start with a capital letter, and the price will be a number.
You can safely assume there will be NO duplicate product input. The comparison for alphabetical order is caseinsensitive.
Output
As output, you must print all the products in a specified format. You must group and order them exactly as specified
above. The group initials should be printed, and their products should be printed below them with 2 spaces before
their names. For more info check the examples.
*/
function main(itemsArr){
    arrToSortedCategories(itemsArr);
}
// [
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'
// ]
function arrToSortedCategories(itemsArr) {

    let productList = {};

    for (let product of itemsArr) {
        product = product.split(' : ');//['Appricot', '20.4']
        let item = product[0];
        let price = +product[1];
        productList[item] = price; //fill object by assigning keys and values
    }
    productList = Array.from(Object.entries(productList)).sort(function(a, b) {
        //Array.from(Object.entries) turns object productList into an array(key value pair), sorted alphabetically by entire word, not just first letter
        var nameA = a[0].toUpperCase();//set to uppercase to make it case insensitive
        var nameB = b[0].toUpperCase();
        nameA < nameB ? -1 :  //tests alphabetical order of full string. NameA comes first
        nameA > nameB ?  1 : 0; // nameB comes first. Names must be equal
    });

    for (i = 0; i < productList.length; i++) {  //loop through productList
        let product = productList[i].join(': ');  //create product output
        let letter = product[0];  //get the first letter of the product to categorize the output
        console.log(letter);  //prints the first letter for the category
        let j = i;  //set j to cycle through while loop
        while (product[0] == letter) {  //while the first letter of the product is equal to the category letter,
            console.log(`  ${product}`);  //console.log the product
            j++;  //increment j
            j < productList.length ? product = productList[j].join(': ') : 0;
            break;  //ensures the while loop does not go beyond the length of the productList.  Otherwise, error will be thrown
        }
    }
    i = j - 1;  //this is to reinitialize i to not repeat or skip over elements that while loop covered.

}
main(["Mouse : 84.99", "Keyboard : 120", "Monitor : 950", "GPU : 875", "Headphones : 189.99", "Mouse Pad : 20"]
);
// G
//   GPU: 875
// H
//   Headphones: 189.99
// K
//   Keyboard: 120
// M
//   Monitor: 950
//   Mouse: 84.99
//   Mouse Pad: 20





// main([
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'
// ]);
/*
A
 Anti-Bug Spray: 15 
 Apple: 1.25
 Appricot: 20.4
B
 Boiler: 300
D
 Deodorant: 10
F
 Fridge: 1500
T
 T-Shirt: 10 
 TV: 1499
*/

// main(
// ['Banana : 2',
// 'Rubic\'s Cube : 5',
// 'Raspberry P : 4999',
// 'Rolex : 100000',
// 'Rollon : 10',
// 'Rali Car : 2000000',
// 'Peter : 0.000001',
// 'Barrel : 10']);

/*
B
 Banana: 2 
 Barrel: 10
P
 Peter: 0.000001
R
 Rali Car: 2000000
 Raspberry P: 4999
 Rolex: 100000
 Rollon: 10
 Rubic's Cube: 5
*/