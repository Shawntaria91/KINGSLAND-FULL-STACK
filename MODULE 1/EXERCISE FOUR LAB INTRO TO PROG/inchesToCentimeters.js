//Problem 3: Convert Inches to Centimeters
var inchesToCentimeters = function(inches) {
    var centimeters = 0.00;
    var centimeterConversion = 2.54;
    centimeters = inches * centimeterConversion;

    return centimeters;
};
console.log(inchesToCentimeters(21));
console.log(inchesToCentimeters(71));
console.log(inchesToCentimeters(87));
console.log(inchesToCentimeters(4));