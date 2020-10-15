function fruitOrVegetable(item) {
    switch(item) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            console.log("fruit");
            break;
        case "cucumber":
        case "pepper":
        case "carrot":
        case "onion":
            console.log("vegetable");
            break;
        default:
            console.log("unknown");
    }
}
fruitOrVegetable("nut");