// 7. City Markets
/*
You have been tasked to follow the sales of products in the different towns. For every town you need to keep track
of all the products sold, and for every product, the amount of total income.
The town and product are both strings. The amount of sales and price for one unit will be numbers. Store all towns
together with its products and the total income of each products. The total income is calculated with the following
formula - amount of sales * price for one unit. If you receive as input a town you already have, you should just add
the new product to it.
Input
The input comes as array of strings. Each element will represent data about a product and its sales. The format of
input is:
{town} -> {product} -> {amountOfSales} : {priceForOneUnit}
Output
As output, you must print every town, its products and the total income of each product in the following format:
“Town – {townName}
 $$${product1Name} : {productTotalIncome}
 $$${product2Name} : {productTotalIncome}
 ...”
The order of output should be in order of appearance.
*/
function main(input){
    cityMarkets(input);
}
function cityMarkets(input) {
    //['Sofia -> Laptops HP -> 200 : 2000', 'Sofia -> Raspberry -> 200000 : 1500', 'Sofia -> Audi Q7 -> 200 : 100000', 'Montana -> Portokals -> 200000 : 1', 'Montana -> Qgodas -> 20000 : 0.2', 'Montana -> Chereshas -> 1000 : 0.3']
    let towns = new Map();
    for (let sale of input) {
        let [town, product, quantityPrice] = sale.split(/\s*->\s*/);
        let [quantity, price] = quantityPrice.split(/\s*:\s*/);
        let income = +(quantity) * +(price);
        if (!towns.has(town)) {
            towns.set(town, new Map());
            towns.get(town).set(product, income);
        } else {
            if (!towns.get(town).has(product)) {
                towns.get(town).set(product, income);
            } else {
                towns.get(town).set(product, town.get(product) + income);
            }
        }
    }
    let print = '';
    for (let [index] of towns) {//why does index need to be in brackets?
        print += (`Town - ${index}\n`);
        for (let [product, price] of towns.get(index)) {
            print += (`$$$${product} : ${price}\n`);
        }
    }
    console.log(print);

}
cityMarkets(['Sofia -> Laptops HP -> 200 : 2000', 'Sofia -> Raspberry -> 200000 : 1500', 'Sofia -> Audi Q7 -> 200 : 100000', 'Montana -> Portokals -> 200000 : 1', 'Montana -> Qgodas -> 20000 : 0.2', 'Montana -> Chereshas -> 1000 : 0.3']);
// Examples
// Input
// ['Sydney '-> Laptops HP -> 200 : 2000',
// 'Sydney '-> Raspberry -> 200000 : 1500',
// 'Sydney'-> Audi Q7 -> 200 : 100000',
// 'Montana -> Portokals -> 200000 : 1',
// 'Montana -> Qgodas -> 20000 : 0.2',
// 'Montana -> Chereshas -> 1000 : 0.3']
// Output
// Town - Sydney
// $$$Laptops HP : 400000
// $$$Raspberry : 300000000
// $$$Audi Q7 : 20000000
// Town - Montana
// $$$Portokals : 200000
// $$$Qgodas : 4000
// $$$Chereshas : 300


