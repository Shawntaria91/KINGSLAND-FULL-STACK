function main(side1, side2, side3) {
    let semiPerimeter = (side1 + side2 + side3) / 2;
    let area = Math.sqrt(semiPerimeter * ((semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3)));
    console.log(area.toFixed(10));
}
main(2, 3.5, 4);