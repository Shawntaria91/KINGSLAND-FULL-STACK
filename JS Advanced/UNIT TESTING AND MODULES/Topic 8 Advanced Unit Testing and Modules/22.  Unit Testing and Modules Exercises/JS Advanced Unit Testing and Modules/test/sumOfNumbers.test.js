// This is the test 

let sum = require('../sumOfNumbers').sum;
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