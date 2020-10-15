function main(type, rows, seats) {
    var Premiere = 12.00;
    var Normal = 7.50;
    var Discount = 5.00;
    var price = 0.00;

    if (type == "Premiere") {
        price = Premiere * rows * seats;
    } else if (type == "Normal") {
        price = Normal * rows * seats;
    }else {
        price = Discount * rows * seats;
    }
    console.log(`${price.toFixed(2)} leva`);
}
main();