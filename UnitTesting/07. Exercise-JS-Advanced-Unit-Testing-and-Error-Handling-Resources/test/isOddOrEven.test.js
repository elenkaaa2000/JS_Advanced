import { assert } from "chai";
import { isOddOrEven } from "../isOddOrEven.js";


describe('Test not string input', () => {

    it('test with number', () => {
        assert.isNotOk(isOddOrEven(5), 'result must be undefined');
    });
    it('test with array', () => {
        assert.equal(isOddOrEven(['Pesho']), undefined, 'result must be undefined')
    });
    it('test with object', () => {
        assert.isNotOk(isOddOrEven({ name: 'Elena' }), "result must be undefined")
    });
    it('test without parameter', () => {
        assert.isNotOk(isOddOrEven(), 'result must be undefined')
    })
});

describe('Test with string value', () => {
    it('test with even length', () => {
        assert.equal(isOddOrEven('abcd'), 'even', 'result must be even')
    });
    it('test with odd length', () => {
        assert.equal(isOddOrEven('abc'), 'odd', 'result must be odd')
    })
})