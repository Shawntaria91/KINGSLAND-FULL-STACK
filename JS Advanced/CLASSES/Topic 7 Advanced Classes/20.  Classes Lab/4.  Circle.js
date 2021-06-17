// 4. Circle
// Write a class that represents a Circle. It has only one data property - it's radius, and it is set trough the
// constructor. The class needs to have getter and setter methods for its diameter - the setter needs to calculate
// the radius and change it and the getter needs to use the radius to calculate the diameter and return it.
// The circle also has a getter area(), which calculates and returns its area.
// Input
// The constructor function and diameter setter will receive valid parameters.
// Output
// The diameter() and area() getters should return numbers.Examples
// What to submit?
// You are only required to submit the Circle class. No need to include the codes from the example.
// Class Signature: class Circle
class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
        return this.radius * 2;
    }
    set diameter(diameter){
        this.radius = diameter/2;
    }
    get area() {
        return Math.PI * this.radius * this.radius;
    }
    get perimeter(){
        return 2 * Math.PI * this.radius;
    }
}

// Sample Input                                   Output
// let c = new Circle(2);
// console.log(`Radius: ${c.radius}`);              2
// console.log(`Diameter: ${c.diameter}`);          4
// console.log(`Area: ${c.area}`);                  12.566370614359172
// c.diameter = 1.6;
// console.log(`Radius: ${c.radius}`);              0.8
// console.log(`Diameter: ${c.diameter}`);          1.6
// console.log(`Area: ${c.area}`);                  2.0106192982974678
// What to submit?
// You are only required to submit the Circle class. No need to include the codes from the example above.
// Class Signature: class Circle