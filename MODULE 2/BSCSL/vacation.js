function main(groupOfPeople, typeOfGroup, dayOfWeek) {
    let price = 0;
    if (typeOfGroup == "Students") {
        if (dayOfWeek == "Friday") {
            price = 8.45;
        } else if (dayOfWeek == "Saturday") {
            price = 9.80;
        } else if (dayOfWeek == "Sunday") {
            price = 10.46;
        }
    } else if (typeOfGroup == "Business") {
        if (dayOfWeek == "Friday") {
            price = 10.90;
        } else if (dayOfWeek == "Saturday") {
            price = 15.60;
        } else if (dayOfWeek == "Sunday") {
            price = 16;
        }
    } else if (typeOfGroup == "Regular") {
        if (dayOfWeek == "Friday") {
            price = 15;
        } else if (dayOfWeek == "Saturday") {
            price = 20;
        } else if (dayOfWeek == "Sunday") {
            price = 22.50;
        }
    }
    let totalPrice = groupOfPeople * price;
    if (typeOfGroup == "Students" && groupOfPeople >= 30) {
        totalPrice = totalPrice - (totalPrice * 0.15);
    } else if (typeOfGroup == "Business" && groupOfPeople >= 100) {
        groupOfPeople = groupOfPeople - 10;
        totalPrice = groupOfPeople * price;
    } else if (typeOfGroup == "Regular" && groupOfPeople >= 10 && groupOfPeople <= 20) {
        totalPrice = totalPrice - (totalPrice * 0.05);
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
main(30, "Students", "Sunday");