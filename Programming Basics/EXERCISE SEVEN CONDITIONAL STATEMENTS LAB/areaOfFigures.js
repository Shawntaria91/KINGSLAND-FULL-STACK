//Calculate the figure area
let calculateArea = function (figureType, size) {
	if (figureType == "square") {
		var squareArea = size ** 2;
		console.log(squareArea.toFixed(2));
	} else if (figureType == "circle") {
		var circleArea = Math.PI * size ** 2;
		console.log(circleArea.toFixed(2));
	} else {
		console.log("Neither square nor circle");
	}
};
calculateArea("circle", 3);
