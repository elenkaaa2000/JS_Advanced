import { expect } from "chai";
import { createCalculator } from "../addSubstract.js";

describe("Test to be function", () => {
    let calc;
    beforeEach(() => {
        calc = createCalculator()
    })
    it('Should be a function', () => {
        expect(typeof calc).to.equal('object')
    });

    describe('Test to be zero when created', () => {
        it('Should be zero', () => {
            expect(calc.get()).to.equal(0);
        });
    });

});

describe('Test add() functionality', () => {
    let calc;
    beforeEach(() => {
        calc = createCalculator()
    })
    it('Test add() with integer', () => {
        calc.add(2);
        calc.add(3);
        expect(calc.get()).to.equal(5)
    });

    it('Test with number as string', () => {
        calc.add("7");
        expect(calc.get()).to.equal(7)
    });

    it('Test with floating number', () => {
        calc.add(3.15);
        calc.add(4.15);
        expect(calc.get()).to.equal(7.300000000000001)
    });
    it('Test with negative number', () => {
        calc.add(-3.15);
        calc.add(-4.15);
        expect(calc.get()).to.equal(-7.300000000000001)
    });

    it('Test with mixed numbers', () => {
        calc.add(3.15);
        calc.add(-4);
        expect(calc.get()).to.equal(-0.8500000000000001)
    })
});

describe('Test subtract function', () => {
    let calc;
    beforeEach(() => {
        calc = createCalculator()
    })

    it('Test subtract()', () => {
        calc.subtract(7);
        calc.subtract(8)
        expect(calc.get()).to.equal(-15)
    });

    it('Test subtract() with floating-point numbers', () => {
        calc.subtract(7.1);
        calc.subtract(8.1)
        expect(calc.get()).to.equal(-15.2)
    });

    it('Test subtract() with fractions', () => {
        calc.subtract(-7);
        calc.subtract(-8)
        expect(calc.get()).to.equal(15)
    });

    it('Test subtract() with string number', () => {
        calc.subtract('7');
        calc.subtract(8)
        expect(calc.get()).to.equal(-15)
    })

});
describe('Test add/subtract functions', () => {
    let calc;
    beforeEach(() => {
        calc = createCalculator()
    });


    it('Should return 0', () => {
        calc.add(7);
        calc.subtract(7);
        expect(calc.get()).to.equal(0)
    });

    it('Should return 1',()=>{
        calc.subtract(4.5)
        calc.add(5.5)
        expect(calc.get()).to.equal(1)
    })

})

describe('Test with invalid inputs', () => {
    let calc;
    beforeEach(() => {
        calc = createCalculator()
    })

    it('Should be Nan with string', ()=>{
        calc.add('pesho');
        expect(calc.get()).to.be.NaN
    });

    it('Should be Nan with object', ()=>{
        calc.add({name: 'Ivan'});
        expect(calc.get()).to.be.NaN
    });

    it('Should be Nan with an array', ()=>{
        calc.add([1,2,3]);
        expect(calc.get()).to.be.NaN
    });

    describe("Check empty input", function () {
        it("Check empty input", function () {
            calc.subtract();
            expect(calc.get()).to.be.NaN;
        })
    });

});



