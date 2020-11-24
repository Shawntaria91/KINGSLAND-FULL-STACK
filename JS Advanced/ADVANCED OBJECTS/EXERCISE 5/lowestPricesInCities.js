/*
You will be given several towns with products and their price. 
You need to find the lowest price for every product and the town it is sold at for that price.

Input
The input comes as array of strings. 
Each element will hold data about a town, product, and its price for that town.
The town and product will be strings and the price will be a number. 
he input will come in the following format:
{townName} | {productName} | {productPrice}
If you receive the same town and product more than once, you should update the old value with the new one.

Output
As output, you must print each product with its lowest price and 
the town at which the product is sold at that price. 
If two towns share the same lowest price, print the one that was entered first.

The output, for every product, should be in the following format:
{productName} -> {productLowestPrice} ({townName})
The order of output should be in order of appearance. See the examples for more info.
*/

function main(townProductsAndPrices) {
    let townProductInfo = new Map();
    for (let i = 0; i < townProductsAndPrices.length; i++) {
        let currTownInfo = townProductsAndPrices[i].split(/\s+\|\s+/g);
        let town = currTownInfo[0];
        let product = currTownInfo[1];
        let price = currTownInfo[2];
        if (!townProductInfo.has(product)) {
            townProductInfo.set(product, new Map);
            townProductInfo.get(product).set(town, +(price));
        }
    }
    for (let [product, towns] of townProductInfo) {
        let lowestPrice = Number.MAX_VALUE;
        let townWithLowestPrice = 0;
        for (let [town, price] of towns) {
            if (price < lowestPrice) {
                lowestPrice = price;
                townWithLowestPrice = town;
            }
        }
        console.log(`${product} -> ${lowestPrice} (${townWithLowestPrice})`);
    }
}
main(["Sample Town | Sample Product | 1000", "Sample Town | Orange | 2", "Sample Town | Peach | 1", "Sydney | Orange | 3", "Sydney | Peach | 2", "New York | Sample Product | 1000.1", "New York | Burger | 10"]);