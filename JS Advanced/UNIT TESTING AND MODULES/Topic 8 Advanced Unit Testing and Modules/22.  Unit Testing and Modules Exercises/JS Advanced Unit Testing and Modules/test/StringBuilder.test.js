// This is the test 

const StringBuilder = require('../StringBuilder')
let expect = require("chai").expect;
let assert = require("chai").assert;

describe('StringBuilder', function() {
    it('Simple input test', function() {
        let str = new StringBuilder('hello');
        str.append(', there');
        str.prepend('User, ');
        str.insertAt('woop', 5);
        str.remove(6, 3);

        expect(str.toString()).equal('User,w hello, there');
    })

    it('Should throw error if not string input', function() {
        expect(() => new StringBuilder(2)).to.throw();
        let str = new StringBuilder('asd');
        expect(() => str.append(234)).to.throw();
    })

    it('Should have instance type', function() {
        expect(StringBuilder.prototype).to.have.property('append');
        expect(StringBuilder.prototype).to.have.property('prepend');
        expect(StringBuilder.prototype).to.have.property('insertAt');
        expect(StringBuilder.prototype).to.have.property('remove');
        expect(StringBuilder.prototype).to.have.property('toString');
    })
})


// What to submit?
// Export the class in stringBuilder.js and import it in your test file to test it. Submit a zip file containing the
// stringBuilder.js and tests folder containing the stringBuilder.test.js . Do not include the node_modules folder.
// File Name: STRING-BUILDER.zip