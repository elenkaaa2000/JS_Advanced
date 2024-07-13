import { expect } from "chai";
import { motorcycleRider } from "../Motorcycle Rider.js"

describe('Test', () => {
    it('Should be an object', () => {
        expect(typeof motorcycleRider).to.equal('object')
    });

    describe('Test licenseRestriction (category)', () => {
        it('Test with invalid input', () => {
            expect(() => motorcycleRider.licenseRestriction('Elena')).to.throw('Invalid Information!');

        });

        it('Test with valid input', () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.");
            expect(motorcycleRider.licenseRestriction('A1')).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.");
            expect(motorcycleRider.licenseRestriction("A2")).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.");
            expect(motorcycleRider.licenseRestriction('A')).to.equal("No motorcycle restrictions, and the minimum age is 24.");

        });
    });

    describe('Test motorcycleShowroom (engineVolume, maximumEngineVolume)', () => {
        it('Test with invalid inpit', () => {
            expect(() => motorcycleRider.motorcycleShowroom(5, 5)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom([1, 2, 3], 'a')).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom(null, { name: 'Stoyan' })).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom([], 5)).to.throw('Invalid Information!');
        });

        it('Test with valid input', () => {

            expect(motorcycleRider.motorcycleShowroom([20, 30, 50], 50)).to.equal("There are 1 available motorcycles matching your criteria!");
            expect(motorcycleRider.motorcycleShowroom([40, 50, 60], 60)).to.equal("There are 2 available motorcycles matching your criteria!");
            expect(motorcycleRider.motorcycleShowroom([50, 50, 60], 70)).to.equal("There are 3 available motorcycles matching your criteria!");
            expect(motorcycleRider.motorcycleShowroom([100, 200, 300], 60)).to.equal("There are 0 available motorcycles matching your criteria!");
        })
    });

    describe('Test otherSpendings(equipment, consumables, discount)0', () => {
        it('Test with invalid input', () => {
            expect(() => motorcycleRider.otherSpendings('a', [1, 2, 3], true)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings([1, 2, 3], 'b', false)).to.throw("Invalid Information!")
            expect(() => motorcycleRider.otherSpendings([1, 2, 3], true, 'a')).to.throw("Invalid Information!")
            expect(() => motorcycleRider.otherSpendings(1, true, { name: 'Ivan' })).to.throw("Invalid Information!")
        });

        it('Test with valid data', () => {
            expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], true)).to.equal("You spend $243.00 for equipment and consumables with 10% discount!");
            expect(motorcycleRider.otherSpendings(['jacket'], ['oil filter'], true)).to.equal("You spend $27.00 for equipment and consumables with 10% discount!");
            expect(motorcycleRider.otherSpendings(['helmet'], ['oil filter'], false)).to.equal("You spend $230.00 for equipment and consumables!");
            expect(motorcycleRider.otherSpendings(['jacket'], ['engine oil'], false)).to.equal("You spend $70.00 for equipment and consumables!");

        })
    })
})