import { assert } from "chai";
import { lookupChar } from "../lookUpChar.js";

describe("Test with non string input", () => {
    it('Test with number and correct index', () => {
        assert.equal(lookupChar(5, 5), undefined, "result must be undefined")
    });
    it('Test with object and correct index', () => {
        assert.equal(lookupChar({ name: 'Elena' }, 5), undefined, "result must be undefined")
    });
    it('Test with array and correct index', () => {
        assert.isNotOk(lookupChar([1, 2, 3], 5), "result must be undefined")
    });
    it('Test with string and invalid index', () => {
        assert.isNotOk(lookupChar('abc', 5.5), undefined, "result must be undefined")
    });
    it('Test with number and incorrect index', () => {
        assert.equal(lookupChar(5, 5.5), undefined, "result must be undefined")
    });
    it('Test with object and incorect index', () => {
        assert.equal(lookupChar({ name: 'Elena' }, 5.5), undefined, "result must be undefined")
    });
    it('test with array and incorrect index', () => {
        assert.isNotOk(lookupChar([1, 2, 3], 5.5), "result must be undefined")
    });
    it("Test without parameters", () => {
        assert.isNotOk(lookupChar(), "result must be undefined")
    });
});

describe("Test with invalid index", () => {
    it('Test with string.length<=index', () => {
        assert.equal(lookupChar('abc', 5), 'Incorrect index')
    });
    it('Test with index < 0', () => {
        assert.equal(lookupChar('abc', -2), "Incorrect index")
    })
});

describe("Test with string value and correct index", () => {
    it('Test with correct input', () => {
        assert.equal(lookupChar('abcde', 3), 'd')
    })
});