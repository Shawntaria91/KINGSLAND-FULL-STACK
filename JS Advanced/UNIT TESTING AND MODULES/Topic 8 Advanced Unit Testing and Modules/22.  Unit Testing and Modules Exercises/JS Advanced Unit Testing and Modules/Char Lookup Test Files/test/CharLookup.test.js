// This is the test 

let chai = require('chai');
let expect = chai.expect;
let lookupChar = require('../CharLookup').lookupChar;

describe("Testing lookingChar function", function() {
    describe("test normal cases", function() {
        it("with string as first parameter and number as second should return char at pos number", function() {
            expect(lookupChar("some text", 0)).to.equal('s');
        });

        it("should return h", function() {
            expect(lookupChar("fish", 3)).to.equal('h');
        });
    });


    describe("test only first parameter of method", function() {

        it("with only with string should return undefined", function() {
            expect(lookupChar("some text")).to.be.equal(undefined);
        });

        it("with a non-string should return undefined", function() {
            expect(lookupChar(4)).to.be.equal(undefined);
        });

        it("with a char should return undefined", function() {
            expect(lookupChar('c')).to.equal(undefined);
        });

        it("with a negative number in first parameter should return undefined", function() {
            expect(lookupChar(-5)).to.equal(undefined);
        });

    });


    describe("test only second parameter", function() {
        it("should return undefined with string as second parameter", function() {
            expect(lookupChar("some text", "text")).to.equal(undefined);
        });

        it("should return undefined with char as second parameter", function() {
            expect(lookupChar("some text", 'd')).to.equal(undefined);
        });

        it("should return incorrect index with second parameter as negative value", function() {
            expect(lookupChar("some text", -4)).to.equal("Incorrect index");
        });

        it("should return incorrect index with second parameter bigger than some text length", function() {
            expect(lookupChar("some text", 15)).to.equal("Incorrect index");
        });

        it("should return undefined with second parameter is floating", function() {
            expect(lookupChar("some text", 2.14)).to.equal(undefined);
        });

        it("with index parameter equal to string length must return undefined", function() {
            expect(lookupChar("pesho", 5)).to.equal("Incorrect index");
        });

    });

    describe("testing two parameters in same time", function() {
        it("with a non-string, and a number as second parameter should return undefined again", function() {
            expect(lookupChar(3435, 4)).to.be.equal(undefined);
        });

        it("with string as first parameter and string as second will return undefined", function() {
            expect(lookupChar("some text", "text")).to.equal(undefined);
        });

        it("with 2 numbers must return undefined", function() {
            expect(lookupChar(13, 0)).to.equal(undefined);
        });
    });

});