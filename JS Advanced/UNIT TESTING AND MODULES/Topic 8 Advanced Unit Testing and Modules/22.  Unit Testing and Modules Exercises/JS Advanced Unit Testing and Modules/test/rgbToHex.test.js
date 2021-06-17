// This is the test 

let rgbToHexColor = require('../rgbToHex').rgbToHexColor;
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