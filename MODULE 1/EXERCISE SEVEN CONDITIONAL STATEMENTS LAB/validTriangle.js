//Write a function to check if a triangle is valid

function main(side1, side2, side3) {
    if (side1 < (side2 + side3) &&
    side2 < (side1 + side3) && side3 < (side1 + side2)) {
        console.log("Valid Triangle");
    } else {
        console.log("Invalid Triangle");
    }
}
main(10,4,5);