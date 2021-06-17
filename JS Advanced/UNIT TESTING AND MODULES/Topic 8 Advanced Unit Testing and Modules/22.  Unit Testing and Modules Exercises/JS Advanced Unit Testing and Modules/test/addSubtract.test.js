// This is the test 

let createCalculator = require('../addSubtract').createCalculator;
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