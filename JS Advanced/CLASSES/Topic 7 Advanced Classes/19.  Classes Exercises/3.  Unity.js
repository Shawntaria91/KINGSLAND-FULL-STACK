// Create a class Rat, which holds the functionality to unite with other objects of the same type. Make it so that the
// object holds all the other objects it has connected to.
// The class should have a name, which is a string, and it should be initialized with it.
// The class should also hold a function unite(otherRat), which unites the first object with the given one. An object
// should store all of the objects it has united to. The function should only add the object if it is an object of the class
// Rat. In any other case it should do nothing.
// The class should also hold a function getRats() which returns all the rats it has united to, in a list.
// Implement functionality for toString() function… which returns a string representation of the object and all of
// the objects it's united with, each on a new line. On the first line put the object’s name and on the next several lines
// put the united objects’ names, each with a padding of “##”.

class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }
    getRats() {
        return this.unitedRats;
    }
    toString() {
        let names = this.name;
        if (this.unitedRats.length) {
            for(let joinedRat of this.unitedRats){
                names += `\n##${joinedRat.name}`;
            }
        }
        return names;
    }
    unite(otherRat) {
        otherRat instanceof Rat ? this.unitedRats.push(otherRat) : 0;
        return this.unitedRats;
    }
}
let firstRat = new Rat("Peter"); 
console.log(firstRat.toString()); //Peter
console.log(firstRat.getRats()); // []
firstRat.unite(new Rat("George")); 
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats()); 
// [Rat { name: 'George', unitedRats: [] }, Rat { name: 'Alex', unitedRats: [] }]
console.log(firstRat.toString());
// Peter
// ##George
// ##Alex

// Experiment- introduce some random object not produced by the class Rat - it got united with Peter so I added this condition to the 'unite' code:
//     if(otherRat instanceof Rat){
//         this.unitedRats.push(otherRat);
//     }
let someRat = { name: 'Harry'};// should not get united because it is not from the class Rat
firstRat.unite(someRat);
console.log(firstRat.getRats());// [] 
firstRat.unite(new Rat('Jane'));
console.log(firstRat.getRats()); // [ Rat { name: 'Jane', unitedRats: [] } ]
let nextRat = new Rat('Fivel');
firstRat.unite(nextRat);
console.log(firstRat.getRats());






