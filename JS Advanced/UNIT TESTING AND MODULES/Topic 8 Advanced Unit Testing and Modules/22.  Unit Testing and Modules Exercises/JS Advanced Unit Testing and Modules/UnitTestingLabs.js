//                                     Lab: Unit Testing and Modules

// Error Handling

// 1. Sub Sum
// Write a function to sum a range of numeric elements from an array.
// The function takes three parameters 
// - the first is an array , 
// - the second is the start index 
// - and the third is the end index . 
// Both indexes are inclusive . Have in mind that the array elements may not be of type

// Number and cast everything . Implement the following error handling :
// ● If the first element is not an array, return NaN
// ● If the start index is less than zero, consider its value to be a zero
// ● If the end index is outside the bounds of the array, assume it points to the last index of the array

// Input / Output
// Your function must take three parameters . As output, return the sum .

function subSum(array, startIndex, endIndex) {
    if (array.constructor !== Array) return NaN;
    if (array.length === 0) return 0;
    if (startIndex < 0) startIndex = 0;
    if (endIndex > array.length - 1) endIndex = array.length - 1;

    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        if (isNaN(Number(array[i]))) return NaN;
        sum += array[i];
    }

    return sum;
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300)); // 150
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)); // 3.3
console.log(subSum([10, 'twenty', 30, 40], 0, 2)); // NaN
console.log(subSum([], 0, 2)); // 0
console.log(subSum('text', 0, 2)); // NaN
console.log(subSum(1, 0, 2)); // NaN


// Examples
// Input                                            Output
// [10, 20, 30, 40, 50, 60],    3, 300                150
// [1.1, 2.2, 3.3, 4.4, 5.5],  -3, 1                  3.3
// [10, 'twenty', 30, 40],      0, 2                  NaN
// [], 1, 2                                           0
// 'text', 0, 2                                       NaN

// What to submit?

// Export your function in subNum.js and import it in your test file to test it. 
// Submit a zip file containing the subNum.js and tests folder containing the subNum.test.js . 
// Do not include the node_modules folder.
// File Name: SUB-SUM.zip


// 2. Playing Cards
// Create a JS factory function that returns a Card object to hold a card’s face and suit , both set through the
// constructor . Throw an error if the card is initialized with invalid face or suit or if an attempt is made to
// change the face or suit of an existing instance to an invalid value.

// ● Valid card faces are: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
// ● Valid card suits are: S ( ♠ ), H ( ♥ ), D ( ♦ ), C ( ♣ )

// Both face and suit are expected as an uppercase string . The class also needs to have a toString()
// method that prints the card’s face and suit as a string . Use the following UTF code literals to represent the
// suits:
// ● \u2660 – Spades ( ♠ )
// ● \u2665 – Hearts ( ♥ )
// ● \u2666 – Diamonds ( ♦ )
// ● \u2663 – Clubs ( ♣ )

// Input / Output
// The factory function takes two string parameters . The toString() method of the returned object must
// return a string .

function makeCard(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = ['S', 'H', 'D', 'C'];
    const suitToChar = {
        'S': "\u2660", // ♠
        'H': "\u2665", // ♥
        'D': "\u2666", // ♦
        'C': "\u2663", // ♣
    };

    isValid(face, suit);

    return {
        face: face,
        suit: suit,
        toString: () => {
            return `${face}${suitToChar[suit]}`;
        }
    };

    function isValid(face, suit) {
        if (!validFaces.includes(face)) {
            throw new Error('Invalid face!');
        }
        if (!validSuits.includes(suit)) {
            throw new Error('Invalid suit!');
        }
    }
}

console.log(makeCard('2', 'H').toString());
console.log(makeCard('A', 'S').toString());


// Examples
// Input                      Output
// 'A', 'S'                      A♠
// '10', 'H'                     10♥
// '1', 'C'                      Error

// What to submit?

// Export your function in playingCards.js and import it in your test file to test it. 
// Submit a zip file containing the playingCards.js and tests folder containing the playingCards.test.js . 
// Do not include the node_modules folder.
// File Name: PLAYING-CARDS.zip


// 3. Deck of Cards
// Write a function that takes a deck of cards as an array of strings and prints them as a sequence of
// cards ( space separated ). Use the solution from the previous task to generate the cards.
// Print " Invalid card: [card] " when an invalid card definition is passed as input.

// Input / Output
// The function takes an array of strings as parameter. Print the list of cards as string , separated by space .

//                 deckOfCards.js

// function printDeckOfCards(cards) {
//     function createCard {
// Use the solution from the previous task
//     }
// TODO
// }

function printDeckOfCards(deck) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = ['S', 'H', 'D', 'C'];
    const suitToChar = {
        'S': "\u2660", // ♠
        'H': "\u2665", // ♥
        'D': "\u2666", // ♦
        'C': "\u2663", // ♣
    };

    let cards = [];
    let face = '';
    let suit = '';

    for (let card of deck) {
        if (!isValid(card)) {
            return;
        }

        cards.push(makeCard(face, suit))
    }

    console.log(cards.join(', '));

    function makeCard(face, suit) {
        return {
            face: face,
            suit: suit,
            toString: () => {
                return `${face}${suitToChar[suit]}`;
            }
        };
    }

    function isValid(card) {
        if (card.length > 3 || card.length < 2) {
            console.log(`Invalid card: ${card}`);
            return false;
        }

        if (card.length === 3) {
            face = '10';
            suit = card[2];
        } else {
            face = card[0];
            suit = card[1];
        }

        if (!validFaces.includes(face) || !validSuits.includes(suit)) {
            console.log(`Invalid card: ${card}`);
            return false;
        }

        return true;
    }
}

printDeckOfCards(['10D', '3D', 'QD', '10C']);


// Examples

// Sample Input                           Sample Output
// ['AS', '10D', 'KH', '2C']                   A♠ 10♦ K♥ 2♣
// ['5S', '3D', 'QD', '1C']                    Invalid card: 1C

// What to submit?

// Export your function in deckOfCards.js and import it in your test file to test it. Submit a zip file containing the
// deckOfCards.js and tests folder containing the deckOfCards.test.js . Do not include the node_modules folder.
// File Name: DECK-OF-CARDS.zip


// 4. Sum of Numbers
// Write tests to check the functionality of the following code:

//                  sumNumbers.js

// function sum(arr) {
//     let sum = 0;
//     for (num of arr)
//         sum += Number(num);
//     return sum;
// }


function sum(arr) {
    let sum = 0;
    for (let num of arr)
        sum += Number(num);
    return sum;
}

module.exports = { sum };


// This is the test 

let sum = require('./sumArray').sum;
let mocha = require('mocha');
let expect = require('chai').expect;

describe("Test summator", () => {
    it("Should return 1 for [1]", () => {
        expect(sum([1])).to.equal(1);
    });

    it("Should return 3 for [1, 2]", () => {
        expect(sum([1, 2])).to.equal(3);
    });

    it("Should return 0 for []", () => {
        expect(sum([])).to.equal(0);
    });

    it("Should return ~3.3 for [1.1, 1.1, 1.1]", () => {
        expect(sum([1.1, 1.1, 1.1])).to.be.closeTo(3.3, 0.0001);
    });

    it("Should work with negative numbers", () => {
        expect(sum([-1, -2, 5])).to.equal(2);
    });

    it("Should return 3 for ['1', 2]", () => {
        expect(sum(['1', 2])).to.equal(3);
    });

    it("Should return NaN", () => {
        expect(sum(['NaN', 2, 3])).to.be.NaN;
    });

    it("Should return NaN", () => {
        expect(sum('NaN')).to.be.NaN;
    });
});


// Your tests will be supplied with a function named 'sum()'. It should meet the following requirements:
// ● Take an array of numbers as argument 
// ● Return the sum of the values of all elements inside the array

// What to submit ?
// Export your function in sumNumbers.js and import it in your test file to test it.Submit a zip file containing the
// sumNumbers.js and tests folder containing the sumNumbers.test.js.Do not include the node_modules folder.
// File Name: SUM - OF - NUMBERS.zip


// 5. Check for Symmetry
// Write tests to check the functionality of the following code:

//              checkForSymmetry.js
// function isSymmetric(arr) {
//     if (!Array.isArray(arr))
//         return false; // Non-arrays are non-symmetric
//     let reversed = arr.slice(0).reverse(); // Clone and reverse
//     let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
//     return equal;
// }


function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) === JSON.stringify(reversed));
    return equal;
}

module.exports = { isSymmetric };


// This is the test 

let isSymmetric = require('./isSymmetric').isSymmetric;
let mocha = require('mocha');
let expect = require('chai').expect;

describe("Test isSymmetric", () => {
    describe("General tests", () => [
        it("should be a function", () => {
            expect(typeof isSymmetric).to.equal('function');
        }),

        it("should be false if argument is not an array", () => {
            expect(isSymmetric({})).to.be.false;
        })
    ]);

    describe("Value tests", () => [
        it("should return true for [1, 2, 3, 3, 2, 1]", () => {
            expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.be.true;
        }),

        it("should return false for [1, 2, 3, 3, 2, 5]", () => {
            expect(isSymmetric([1, 2, 3, 3, 2, 5])).to.be.false;
        }),

        it("should return true for [1, 2, 3, 2, 1]", () => {
            expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
        }),

        it("should return false for [1, 2, 3, 2, 5]", () => {
            expect(isSymmetric([1, 2, 3, 2, 5])).to.be.false;
        }),

        it("should return true for [1]", () => {
            expect(isSymmetric([1])).to.be.true;
        }),

        it("should return false for [1, 2]", () => {
            expect(isSymmetric([1, 2])).to.be.false;
        }),

        it("should return true for [5, 'hi', {a:5}, new Date(), {a:5}, 'hi', 5]", () => {
            expect(isSymmetric([5, 'hi', { a: 5 }, new Date(), { a: 5 }, 'hi', 5])).to.be.true;
        }),

        it("should return false for [5, 'hi', {b:5}, new Date(), {a:5}, 'hi', 5]", () => {
            expect(isSymmetric([5, 'hi', { b: 5 }, new Date(), { a: 5 }, 'hi', 5])).to.be.false;
        })
    ]);
});


// Your tests will be supplied with a function named ' isSymmetric() '.It should meet the following
// requirements: 
// ● Take an array as argument
// ● Return false for any input that isn’ t of the correct type

// ● Return true if the input array is symmetric
// ● Otherwise, return false

// What to submit ?
// Export your function in checkForSymmetry.js and import it in your test file to test it.Submit a zip file containing the
// checkForSymmetry.js and tests folder containing the checkForSymmetry.test.js.Do not include the node_modules
// folder.
// File Name: CHECK - FOR - SYMMETRY.zip


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


// This is the test 

let rgbToHexColor = require('./rgbToHex').rgbToHexColor;
let mocha = require('mocha');
let expect = require('chai').expect;

describe("Test RGB to Hex Color", () => {
    describe("General tests", () => [
        it("should be a function", () => {
            expect(typeof rgbToHexColor).to.equal('function');
        }),

        it("should take 3 arguments", () => {
            expect(rgbToHexColor.length).to.equal(3);
        })
    ]);

    describe("Normal values tests", () => [
        it("should return #FF9EAA for (255, 158, 170)", () => {
            expect(rgbToHexColor(255, 158, 170)).to.equal('#FF9EAA');
        }),

        it("should return #0C0D0E for (12, 13, 14)", () => {
            expect(rgbToHexColor(12, 13, 14)).to.equal('#0C0D0E');
        }),

        it("should return #000000 for (0, 0, 0)", () => {
            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        }),

        it("should return #FFFFFF for (255, 255, 255)", () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        }),
    ]);

    describe("Invalid input tests", () => [
        it("should return undefined for (-1, 10, 10)", () => {
            expect(rgbToHexColor(-1, 10, 10)).to.equal(undefined);
        }),

        it("should return undefined for (10, -1, 10)", () => {
            expect(rgbToHexColor(10, -1, 10)).to.equal(undefined);
        }),

        it("should return undefined for (10, 10, -1)", () => {
            expect(rgbToHexColor(10, 10, -1)).to.equal(undefined);
        }),

        it("should return undefined for (256, 10, 10)", () => {
            expect(rgbToHexColor(256, 10, 10)).to.equal(undefined);
        }),

        it("should return undefined for (10, 256, 10)", () => {
            expect(rgbToHexColor(10, 256, 10)).to.equal(undefined);
        }),

        it("should return undefined for (10, 10, 256)", () => {
            expect(rgbToHexColor(10, 10, 256)).to.equal(undefined);
        }),

        it("should return undefined for (3.14, 10, 256) ", () => {
            expect(rgbToHexColor(3.14, 10, 256)).to.equal(undefined);
        }),

        it("should return undefined for (10, 2.71, 256) ", () => {
            expect(rgbToHexColor(10, 2.71, 256)).to.equal(undefined);
        }),

        it("should return undefined for (10, 10, 1.61) ", () => {
            expect(rgbToHexColor(10, 10, 1.61)).to.equal(undefined);
        }),

        it("should return undefined for ('10', 10, 256)", () => {
            expect(rgbToHexColor('10', 10, 256)).to.equal(undefined);
        }),

        it("should return undefined for (10, [], 256)", () => {
            expect(rgbToHexColor(10, [], 256)).to.equal(undefined);
        }),

        it("should return undefined for (10, 10, {})", () => {
            expect(rgbToHexColor(10, 10, {})).to.equal(undefined);
        }),
    ]);
});


// Your tests will be supplied with a function named ' rgbToHexColor() ', which takes three arguments.It
// should meet the following requirements:

// ● Take three integer numbers , representing the red, green and blue values of an RGB color, each
// within range [0…255]
// ● Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
// ● Return undefined if any of the input parameters are of invalid type or not in the expected range

// What to submit?
// Export your function in rgbToHex.js and import it in your test file to test it. Submit a zip file containing the
// rgbToHex.js and tests folder containing the rgbToHex.test.js . Do not include the node_modules folder.
// File Name: RGB-TO-HEX.zip


// 7. Add / Subtract
// Write tests to check the functionality of the following code:

//             addSubtract.js
// function createCalculator() {
//     let value = 0;
//     return {
//         add: function(num) { value += Number(num); },
//         subtract: function(num) { value -= Number(num); },
//         get: function() { return value; }
//     }
// }


function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

module.exports = { createCalculator };


// This is the test 

let createCalculator = require('./calculator').createCalculator;
let mocha = require('mocha');
let expect = require('chai').expect;

describe("Test createCalculator", () => {
    let calc;
    beforeEach(() => {
        calc = createCalculator();
    });

    describe("General tests", () => [
        it("should be a function", () => {
            expect(typeof createCalculator).to.equal('function');
        }),

        it("should return an object", () => {
            expect(typeof calc).to.equal('object');
        }),

        it("should have value of 0 when created", () => {
            expect(calc.get()).to.equal(0);
        }),

        it("should return undefined accessing value from outside", () => {
            expect(calc.value).to.equal(undefined);
        }),
    ]);

    describe("Values tests", () => [
        it("should add properly", () => {
            calc.add(3);
            calc.add(7);
            expect(calc.get()).to.equal(10);
        }),

        it("should subtract properly", () => {
            calc.subtract(3);
            calc.subtract(7);
            expect(calc.get()).to.equal(-10);
        }),

        it("should add and subtract properly", () => {
            calc.add(10);
            calc.subtract(5);
            expect(calc.get()).to.equal(5);
        }),

        it("should work with fractions properly", () => {
            calc.add(3.14);
            calc.subtract(2.15);
            expect(calc.get()).to.be.closeTo(0.99, 0.0001);
        }),

        it("should add strings that can be parsed to numbers properly", () => {
            calc.add('3');
            calc.add('7');
            expect(calc.get()).to.equal(10);
        }),

        it("should subtract strings that can be parsed to numbers properly", () => {
            calc.subtract('3');
            calc.subtract('7');
            expect(calc.get()).to.equal(-10);
        }),

        it("should not add NaN's", () => {
            calc.add('ten');
            expect(calc.get()).to.be.NaN;
        }),

        it("should not subtract NaN's", () => {
            calc.subtract('ten');
            expect(calc.get()).to.be.NaN;
        }),
    ]);
});


// Your tests will be supplied with a function named ' createCalculator() '.It should meet the following
// requirements: 
// ● Return a module ( object ), containing the functions add() , subtract() and get() as
// properties
// ● Keep an internal sum which can’t be modified from the outside
// ● The functions add() and subtract() take a parameter that can be parsed as a number (either a
// number or a string containing a number) that is added or subtracted from the internal sum
// ● The function get() returns the value of the internal sum

// What to submit ?
// Export your function in addSubtract.js and import it in your test file to test it.Submit a zip file containing the
// addSubtract.js and tests folder containing the addSubtract.test.js.Do not include the node_modules folder.
// File Name: ADD - SUBRACT.zip


//