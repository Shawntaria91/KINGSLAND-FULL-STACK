//Calculate the price for a drink
//coffee(1.00) or tea(.60)
//extra: sugar(.40) or no

function main(drinkName, extra) {
    var price = 0.00;
    if (drinkName == "coffee") {
       price = price + 1.00;
    } else if (drinkName == "tea") {
        price = price + 0.60;
    }
    if (extra == "sugar") {
        price = price + 0.40;
    } 

    console.log("Final Price: $"+price.toFixed(2));
}
main("coffee", "sugar");