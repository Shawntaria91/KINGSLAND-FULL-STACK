/*
You have been tasked to follow the sales of products in the different towns. 
For every town you need to keep track of all the products sold, 
and for every product, the amount of total income.
The town and product are both strings. 
The amount of sales and price for one unit will be numbers. 
Store all towns together with its products and the total income of each products. 
The total income is calculated with the following formula 
- amount of sales * price for one unit. 
If you receive as input a town you already have, you should just add the new product to it.

Input
The input comes as array of strings. Each element will represent data about a product and its sales. 
The format of input is:
{town} -> {product} -> {amountOfSales} : {priceForOneUnit}

Output
As output, you must print every town, its products and the total income of each product in the following format:
“Town – {townName}
 $$${product1Name} : {productTotalIncome}
 $$${product2Name} : {productTotalIncome}
 ...”
The order of output should be in order of appearance.
*/

function main(townProductInfo) {
    let towns = new Map();
    for (let sale of townProductInfo) {
        let [town, product, qtyAndPrice] = sale.split(/\s*->\s*/);
        let [qty, price] = qtyAndPrice.split(/\s*:\s*/);
        let totIncome = +(qty) * +(price);
        if (!towns.has(town)) {
            towns.set(town, new Map());
            towns.get(town).set(product, totIncome);
        } else {
            if (!towns.get(town).has(product)) {
                towns.get(town).set(product, totIncome);
            } else {
                towns.get(town).set(product, town.get(product) + totIncome);
            }
        }
    }
    let result = '';
    for (let [index] of towns) {
        result += (`Town - ${index}\n`);
        for (let [product, price] of towns.get(index)) {
            result += (`$$$${product} : ${price}\n`);
        }
    }
    console.log(result);
}
main(['Sofia -> Laptops HP -> 200 : 2000', 'Sofia -> Raspberry -> 200000 : 1500', 'Sofia -> Audi Q7 -> 200 : 100000', 'Montana -> Portokals -> 200000 : 1', 'Montana -> Qgodas -> 20000 : 0.2', 'Montana -> Chereshas -> 1000 : 0.3']);