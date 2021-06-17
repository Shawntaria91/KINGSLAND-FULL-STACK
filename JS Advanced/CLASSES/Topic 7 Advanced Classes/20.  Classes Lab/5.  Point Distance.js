// 5. Point Distance
// Write a JS class that represents a Point. It has x and y coordinates as properties, that are set through the
// constructor, and a static method for finding the distance between two points, called distance().
// Input
// The distance() method should receive two Point objects as parameters.
// Output
// The distance() method should return a number, the distance between the two point parameters.
// What to submit?
// You are only required to submit the Point class. No need to include the codes from the example.
// Class Signature: class Point

// Example
// Sample Input                               Output 
// let p1 = new Point(5, 5);                    5
// let p2 = new Point(9, 8);
// console.log(Point.distance(p1, p2));
// What to submit?
// You are only required to submit the Point class. No need to include the codes from the example above.
// Class Signature: class Point

class Point{

    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b){
        return Math.hypot(a.x - b.x, a.y - b.y);
    }
}

// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     static distance(a, b) {
//         return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
//     }
// }