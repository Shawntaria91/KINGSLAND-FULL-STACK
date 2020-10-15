//Calculate the figure area

var calculateArea = function (figureType, size) {

    if (figureType == "square") {
        var squareArea = size * size;
        console.log(squareArea.toFixed(2));
    } else if (figureType == "circle") {
        var circleArea = 3.14159 * size * size;
        console.log(circleArea.toFixed(2));
    }  else {
        console.log("Neither square nor circle");
    }
};
calculateArea("square", 5);