// 6. RGB to Hex
// Write tests to check the functionality of the following code:

//                 rgbToHex.js
// function rgbToHexColor(red, green, blue) {
//     if (!Number.isInteger(red) || (red < 0) || (red > 255))
//         return undefined; // Red value is invalid
//     if (!Number.isInteger(green) || (green < 0) || (green > 255))
//         return undefined; // Green value is invalid
//     if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
//         return undefined; // Blue value is invalid
//     return "#" +
//         ("0" + red.toString(16).toUpperCase()).slice(-2) +
//         ("0" + green.toString(16).toUpperCase()).slice(-2) +
//         ("0" + blue.toString(16).toUpperCase()).slice(-2);
// }


function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

module.exports = { rgbToHexColor };



//