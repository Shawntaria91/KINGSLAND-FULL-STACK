// this is the test 

var expect = require('chai').expect;
var chai = require('chai');
//const { assert } = require('chai');
const isOddOrEven = require('../isOddOrEven');
chai.should();

describe('isOddOrEven', function() {
    it('should return undefined with a number parameter', function() {
        expect(isOddOrEven('13'), undefined,
            "Function did not return the correct result!")
    });

    it('should return undefined with an object parameter', function() {
        expect(isOddOrEven({ name: "George" }), undefined,
            "Function did not return the correct result!");
    });

    it('should return correct result with an even length', function() {
        expect(isOddOrEven("roar"), "even",
            "Function did not return the correct result!")
    });

    it('should return correct result with an odd length', function() {
        expect(isOddOrEven("Peter")).to.equal("odd",
            "Function did not return the correct result!")
    });

    it('should return correct values with multiple consecutive checks', function() {
        expect(isOddOrEven("Cat")).to.equal("odd",
            "Function did not return the correct result!")
        expect(isOddOrEven("pet")).to.equal("odd",
            "Function did not return the correct result!")
        expect(isOddOrEven("bird")).to.equal("even",
            "Function did not return the correct result!")
    });

});