import { assert } from "chai";
import { mathEnforcer } from "../mathEnforcer.js";

describe('Test addFive function', () => {
    describe('Test with non number value', () => {
        it('Test with string', () => {
            assert.isNotNumber(mathEnforcer.addFive('abc'), undefined, 'result must be undefined')
        });
        it('Test with object', () => {
            assert.isNotNumber(mathEnforcer.addFive({ name: 'Ivan' }), undefined, 'result must be undefined')
        });
        it('Test with array', () => {
            assert.isNotNumber(mathEnforcer.addFive([1, 2, 3]), undefined, 'result must be undefined')
        });


        describe('Test with correct input', () => {
            it('Test with positive value', () => {
                assert.equal(mathEnforcer.addFive(0), 5, "result must be 5")

                assert.equal(mathEnforcer.addFive(2), 7, "result must be 7");
                assert.equal(mathEnforcer.addFive(2.5), 7.5, "result must be 7.5")
            });
            it('Test with negative integer', () => {
                assert.equal(mathEnforcer.addFive(-10), -5, "result must be -5")

                assert.equal(mathEnforcer.addFive(-5), 0, "result must be 0");
                assert.equal(mathEnforcer.addFive(-5.5), -0.5, "result must be -0.5")
            })
        });

    })

});

describe('Test substractTen function', () => {
    describe('Test with non number value', () => {
        it('Test with string', () => {
            assert.isNotNumber(mathEnforcer.subtractTen('abc'), undefined, 'result must be undefined')
        });
        it('Test with object', () => {
            assert.isNotNumber(mathEnforcer.subtractTen({ name: 'Ivan' }), undefined, 'result must be undefined')
        });
        it('Test with array', () => {
            assert.isNotNumber(mathEnforcer.subtractTen([1, 2, 3]), undefined, 'result must be undefined')
        });


        describe('Test with correct input', () => {
            it('Test with positive value', () => {
                assert.equal(mathEnforcer.subtractTen(20), 10, "result must be 10");
                assert.equal(mathEnforcer.subtractTen(20.5), 10.5, "result must be 10.5");
                assert.equal(mathEnforcer.subtractTen(10), 0, "result must be 0");
            });
            it('Test with negative value', () => {
                assert.equal(mathEnforcer.subtractTen(-10), -20, "result must be -20");
                assert.equal(mathEnforcer.subtractTen(-0.5), -10.5, "result must be -10.5");
                assert.equal(mathEnforcer.subtractTen(0), -10, "result must be -10");
            })
        });

    })

});

describe('Test sum function', () => {
    describe('Test with incorect', () => {
        it("Test with string value", () => {
            assert.isNotNumber(mathEnforcer.sum('5', 5), undefined, 'result must be undefined');
            assert.isNotNumber(mathEnforcer.sum(5, "5"), undefined, 'result must be undefined');
            assert.isUndefined(mathEnforcer.sum('5', '5'), undefined, 'result must be undefined');
        });

        it("Test with object value", () => {
            assert.isNotNumber(mathEnforcer.sum({ name: 'Elena' }, 5), undefined, 'result must be undefined');
            assert.isNotNumber(mathEnforcer.sum(5, { name: 'Elena' }), undefined, 'result must be undefined');
            assert.isNotNumber(mathEnforcer.sum({ number: 5 }, { name: 'Elena' }), undefined, 'result must be undefined')
        });
        it('Test with array', () => {
            assert.isNotNumber(mathEnforcer.sum([1, 2, 3], 5), undefined, 'result must be undefined');
            assert.isNotNumber(mathEnforcer.sum(5, [1, 2, 3]), undefined, 'result must be undefined');
            assert.isNotNumber(mathEnforcer.sum([5], [1, 2, 3]), undefined, 'result must be undefined')
        });
    });

    describe("Test with correct input", () => {
        it('Test with positive numbers', () => {
            assert.equal(mathEnforcer.sum(1, 1), 2);
            assert.equal(mathEnforcer.sum(1.5, 2), 3.5);
            assert.equal(mathEnforcer.sum(2, 1.5), 3.5);
            assert.equal(mathEnforcer.sum(1.5, 1.5), 3);
            assert.equal(mathEnforcer.sum(0, 0), 0);;
            assert.equal(mathEnforcer.sum(0, 5), 5);
        });

        it('test with negative numbers', () => {
            assert.equal(mathEnforcer.sum(-1, -2), -3);

            assert.equal(mathEnforcer.sum(-2, -1.5), -3.5);
            assert.equal(mathEnforcer.sum(-1.5, -2), -3.5);


        });

        it('test with mixed nunbers', () => {
            assert.equal(mathEnforcer.sum(0, -10), -10);
            assert.equal(mathEnforcer.sum(-1.5, 1), -0.5);
            assert.equal(mathEnforcer.sum(-10, 10.5), 0.5);

        })


    });
});