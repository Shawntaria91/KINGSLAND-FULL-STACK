// 8. Lowest Prices in Cities
/*
You will be given several towns with products and their price. You need to find the lowest price for every product
and the town it is sold at for that price.
Input
The input comes as array of strings. Each element will hold data about a town, product, and its price for that town.
The town and product will be strings and the price will be a number. The input will come in the following format:
{townName} | {productName} | {productPrice}
If you receive the same town and product more than once, you should update the old value with the new one.
Output
As output, you must print each product with its lowest price and the town at which the product is sold at that
price. If two towns share the same lowest price, print the one that was entered first.
The output, for every product, should be in the following format:
{productName} -> {productLowestPrice} ({townName})
The order of output should be in order of appearance. See the examples for more info.
*/
function main(input) {
    let productsTownsMap = new Map();
    
    for (let i = 0; i < input.length; i++) {//loop through input
        let current = input[i].split(/\s+\|\s+/g);//prep data by splitting on "space | space" with regex
        let town = current[0];//set variables to each piece of data
        let product = current[1];
        let price = current[2];
        //fill Products Map
        if (!productsTownsMap.has(product)) {//if current product is not found in productsTowns Map, 
            productsTownsMap.set(product, new Map());//set key to value (product => sub new Map),
            productsTownsMap.get(product).set(town, +price);//set key to value for sub new Map (town => price)
        }
    }
    for (let [product,townPriceSubmap] of productsTownsMap) {//loop through elements of productsTowns Map 
        let minPrice = Number.MAX_VALUE;
        let minPriceTown = 0; //initiate variable for minPriceTown 
        for (let [town,price] of townPriceSubmap) {//loop through elements of townPriceSubmap

            if (price < minPrice) {
                minPrice = price;
                minPriceTown = town;
            }
        }
        console.log(`${product} -> ${minPrice} (${minPriceTown})`);
    }
}
main(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sydney | Orange | 3',
'Sydney | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);
// Sample Product -> 1000 (Sample Town)
// Orange -> 2 (Sample Town)
// Peach -> 1 (Sample Town)
// Burger -> 10 (New York)


// main([
//     'Sofia City | Audi | 100000',
//     'Sofia City | BMW | 100000',
//     'Sofia City | Mitsubishi | 10000',
//     'Sofia City | Mercedes | 10000',
//     'Sofia City | NoOffenseToCarLovers | 0',
//     'Mexico City | Audi | 1000',
//     'Mexico City | BMW | 99999',
//     'New York City | Mitsubishi | 10000',
//     'New York City | Mitsubishi | 1000',
//     'Mexico City | Audi | 100000',
//     'Washington City | Mercedes | 1000'
// ]);

