function main(widthFreeSpace, lengthFreeSpace, heightFreeSpace, computersTransferred) {
var cubicMeters = widthFreeSpace * lengthFreeSpace * heightFreeSpace;
var spaceTaken = 0;
var spaceNeeded = 0;
for (var i = 0; i <= computersTransferred.length; i++) {
    var computers = computersTransferred[i]; 

if ((spaceTaken <= cubicMeters) && (computers == "Done")) {
        var freeSpace = cubicMeters - spaceTaken;
        console.log(`${freeSpace} Left space.`);
    } else if ((spaceTaken <= cubicMeters) && (computers != "Done")) {
    spaceTaken += computers; 
    } else if ((spaceTaken > cubicMeters) && (computers != "Done")) {
        spaceNeeded = spaceTaken - cubicMeters;
        console.log(`No more free space! You need ${spaceNeeded} Cubic meters more.`);
    }
}
}
//main(10, 10, 2, [20, 20, 20, 20, 122]);
main(10, 1, 2, [4, 6, "Done"]);