// This is the test 

const validator = require('../requestValidator');
const chai = require('chai');
const { expect, assert } = chai;
const should = require('chai').should();
describe('requestValidator', () => {
    it('should throw an error if method does not equal GET, POST, DELETE, CONNECT', () => { //should throw an error if method is not GET, POST, DELETE or CONNECT
        let data = {
            //method: 'INVALID',
            method: 'frog',
            // uri: 'home.bash',
            // message: 'rm -rf /*' 
        }
        try {
            validator(data)
        } catch (error) {
            expect(error.message).to.equal('Invalid request header: Invalid Method')
        }
    });
    it('should throw an error if uri is invalid', () => {
        let data = {
            method: 'GET',
            uri: '*',
            version: 'HTTP/1.1',
            message: ''
                // message: 'rm -rf /*' 
        }
        try {
            validator(data)
        } catch (error) {
            expect(error.message).to.equal('Invalid request header: Invalid URI')
        }
    });
    it('should throw an error if version is not HTTP/0.9, HTTP/1.0, HTTP/1.1 or HTTP/2.0', () => { //should throw an error if method is not GET, POST, DELETE or CONNECT
        let data = {
            //method: 'INVALID',
            method: 'POST',
            uri: "home.bash",
            version: "hello",
            message: 'rm -rf /*'
        }
        try {
            validator(data)
        } catch (error) {
            expect(error.message).to.equal('Invalid request header: Invalid Version')
        }
    });
    it('should throw an error MSG is invalid', () => {
        let data = {
            method: 'GET',
            uri: '*',
            version: 'HTTP/1.1',
            message: '<, >, \, &, frog'
                // message: 'rm -rf /*' 
        }
        try {
            validator(data)
        } catch (error) {
            expect(error.message).to.equal('Invalid request header: Invalid Message')
        }
    });
    it('should throw an error if item is missing', () => { //should throw an error if method is not GET, POST, DELETE or CONNECT
        let data = {
            method: 'GET',
            uri: '&^%',
            message: '<, >, \, &, frog'
                // message: 'rm -rf /*' 
        }
        try {
            validator(data)
        } catch (error) {
            expect(error.message).to.equal('Invalid request header: Invalid URI')
        }
    });
});