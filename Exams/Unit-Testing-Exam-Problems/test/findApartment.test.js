import { expect } from "chai";
import { findNewApartment } from "../findApartment.js";

describe('Test findNeApartment', () => {
    it('Should be an object', () => {
        expect(typeof findNewApartment).to.equal('object')
    });

    describe('Test isGoodLocation(city,nearPublicTransportation)', () => {
        it('Test with invalid input', () => {
            expect(() => findNewApartment.isGoodLocation(5, true)).to.throw('Invalid input!');
            expect(() => findNewApartment.isGoodLocation('a', 5)).to.throw('Invalid input!')
            expect(() => findNewApartment.isGoodLocation([1, 2, 3], { name: 'Ivan' })).to.throw('Invalid input!')
        });

        it('Test with valid input', () => {
            expect(findNewApartment.isGoodLocation('Razlog', true)).to.equal("This location is not suitable for you.");
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal("There is no public transport in area.");
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal("There is no public transport in area.");
            expect(findNewApartment.isGoodLocation('Varna', false)).to.equal("There is no public transport in area.");
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal("You can go on home tour!");
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal("You can go on home tour!");
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal("You can go on home tour!");
        });
        
    });

    describe('Test isLargeEnough (apartments, minimalSquareMeters)', ()=>{
        it('Test with invalid input', ()=>{
            expect(()=>findNewApartment.isLargeEnough('abc', 5)).to.throw('Invalid input!');
            expect(()=>findNewApartment.isLargeEnough([],5)).to.throw('Invalid input!')
            expect(()=>findNewApartment.isLargeEnough(['a','b','c'], 'abc')).to.throw('Invalid input!')
        });

        it('Test with valid input',()=>{
            expect(findNewApartment.isLargeEnough([20,30,40],10)).to.equal('20, 30, 40');
            expect(findNewApartment.isLargeEnough([20,30,40],20)).to.equal('20, 30, 40');
            expect(findNewApartment.isLargeEnough([20,30,40],25)).to.equal('30, 40');
            expect(findNewApartment.isLargeEnough([20,30,40],30)).to.equal('30, 40');
            expect(findNewApartment.isLargeEnough([20,30,40],40)).to.equal('40');
            expect(findNewApartment.isLargeEnough([20,30,40],60)).to.equal('');
        })
    });

    describe('Test isItAffordable(price, budget)',()=>{
        it('Test with invalid input',()=>{
            expect(()=>findNewApartment.isItAffordable('a',5)).to.throw('Invalid input!');
            expect(()=>findNewApartment.isItAffordable(5,'a')).to.throw('Invalid input!')
            expect(()=>findNewApartment.isItAffordable([1,2,3], {name: 'Ivan'})).to.throw('Invalid input!')
        });

        it('Test with valid input', ()=>{
            expect(findNewApartment.isItAffordable(110,100)).to.equal("You don't have enough money for this house!");
            expect(findNewApartment.isItAffordable(100,100)).to.equal("You can afford this home!");
            expect(findNewApartment.isItAffordable(90,100)).to.equal("You can afford this home!")
        })
    })
})