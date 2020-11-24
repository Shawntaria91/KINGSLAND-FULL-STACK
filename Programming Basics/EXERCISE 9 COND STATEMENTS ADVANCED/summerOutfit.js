function main(deg, timeOfDay) {

    var Outfit = "";
    var Shoes = "";
    if ((deg >= 10) && (deg <= 18)) {
        if (timeOfDay == "Morning") {
            Outfit = "Sweatshirt";
            Shoes = "Sneakers";
        } else if ((timeOfDay == "Afternoon") || (timeOfDay == "Evening")) {
            Outfit = "Shirt";
            Shoes = "Moccasins";
        } else {
            console.log("no case");
        }
    } else if ((deg > 18) && (deg <= 24)) {
        if (timeOfDay == "Afternoon") {
            Outfit = "T-Shirt";
            Shoes = "Sandals";
        } else if ((timeOfDay == "Morning") || (timeOfDay == "Evening")) {
            Outfit = "Shirt";
            Shoes = "Moccasins";
        } else {
            console.log("no case");
        }
    } else if (deg >= 25) {
        if (timeOfDay == "Morning") {
            Outfit = "T-Shirt";
            Shoes = "Sandals";
        } else if (timeOfDay == "Afternoon") {
            Outfit = "SwimSuit";
            Shoes = "Barefoot";
        } else if (timeOfDay == "Evening") {
            Outfit = "Shirt";
            Shoes = "Moccasins";
        } else {console.log("no case");}
    } else {
        console.log("no case");
    }
    console.log(`It's ${deg} degrees, get your ${Outfit} and ${Shoes}.`);
}
main(22, "Afternoon");