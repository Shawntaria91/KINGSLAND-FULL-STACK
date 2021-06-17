// This is the test 

let isSymmetric = require('../checkForSymmetry').isSymmetric;
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