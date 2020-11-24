function main(season, type, days) {
    var price = 0.00;
    if (season == "Spring") {
        if (type == "Hotel") {
            price = 30 - (30 * 0.20);
        } else price = 10 - (10 * 0.20);
    } else if (season == "Summer") {
        if (type == "Hotel") {
            price = 50;
        }else price = 30;
    } else if (season == "Autumn") {
        if (type == "Hotel") {
            price = 20 - (20 * 0.30);
        } else price += 15 - (15 * 0.30);
    } else {
        if (type == "Hotel") {
            price = 40 - (40 * 0.10);
        } else {
            price = 10 - (10 * 0.10);
        }
    }
    price = price * days;
    console.log(price.toFixed(2));
}
main("Winter", "Hotel", 5);