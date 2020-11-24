function main(product, quantity) {
    console.log(totalPrice(product, quantity));
}

function totalPrice(product, quantity) {
    let coffeePrice = 1.50 * quantity;
    let waterPrice = 1.00 * quantity;
    let cokePrice = 1.40 * quantity;
    let snacksPrice = 2.00 * quantity;
    let total = 0;
    if (product == 'coffee') {
        total = coffeePrice.toFixed(2);
        return total;
    } else if (product == 'water') {
        total = waterPrice.toFixed(2);
        return total;
    } else if (product == 'coke') {
        total = cokePrice.toFixed(2);
        return total;
    } else if (product == 'snacks') {
        total = snacksPrice.toFixed(2);
        return total;
    }
}
main('water', 5);