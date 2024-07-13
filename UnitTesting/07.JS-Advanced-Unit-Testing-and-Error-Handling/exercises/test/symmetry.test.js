import { expect } from 'chai';
import { isSymmetric } from '../symmetry.js';


describe('Test symmetric array', () => {
    it('Array must be symmetric', () => {
        let input = [1, 2, 1];
        let result = isSymmetric(input)

        expect(result).to.be.true
    });

    it('Should return false if not symmetric', () => {
        let input = [1, 2, 3];
        let result = isSymmetric(input);
        expect(result).to.be.false

    });

    it('Return true if input is an empty string', () => {
        expect(isSymmetric([])).to.be.true
    })

    it('Should return false if input is not an array', () => {
        expect(isSymmetric({})).to.be.false;
        expect(isSymmetric({ name: "Ivan" })).to.be.false;
        expect(isSymmetric(1)).to.be.false;
        expect(isSymmetric(1, 2, 4)).to.be.false;
        expect(isSymmetric('addd')).to.be.false;
        expect(isSymmetric('')).to.be.false;
        expect(isSymmetric(NaN)).to.be.false;
        expect(isSymmetric(undefined)).to.be.false;
        expect(isSymmetric(false)).to.be.false;
    });

    it('Should return false input with symmetric numbers', ()=>{
        expect(isSymmetric(1,2,1)).to.be.false
    })

    it('Should return true', ()=>{
        expect(isSymmetric(['a','b','a'])).to.be.true;
        expect(isSymmetric([3.14,'b',3.14])).to.be.true;
        expect(isSymmetric(['a',5,'a'])).to.be.true;
    });

    it('Should return false', ()=>{
        expect(isSymmetric(['b','a','c'])).to.be.false;
        expect(isSymmetric([5,'b','a'])).to.be.false;
        expect(isSymmetric([5,4,'5'])).to.be.false;
        expect(isSymmetric('abba')).to.be.false;
    })


})