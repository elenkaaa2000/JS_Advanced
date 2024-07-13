import { expect } from "chai";
import { rentCar } from "../rentCar.js";

describe('Test', () => {
    it('Should return an object', () => {
        expect(typeof rentCar).to.equal('object')
    });

    describe('Test searchCar(shop, model)', () => {
        it('Test invalid input', () => {
            expect(() => rentCar.searchCar('a', 5)).to.throw('Invalid input!');
        })

        it('Test with valid input', () => {
            expect(rentCar.searchCar(['BMW', 'Audi', 'Volkswagen'], 'BMW')).to.equal(`There is 1 car of model BMW in the catalog!`);
            expect(rentCar.searchCar(['BMW', 'Audi', 'Volkswagen', 'BMW'], 'BMW')).to.equal(`There is 2 car of model BMW in the catalog!`);
            expect(() => rentCar.searchCar(['BMW', 'Audi', 'Volkswagen', 'BMW'], 'Renault')).throw('There are no such models in the catalog!')
        })
    });

    describe('Test calculatePriceOfCar(model, days)', () => {
        it('Test invalid input', () => {
            expect(() => rentCar.calculatePriceOfCar([1, 2, 3], 'a')).to.throw('Invalid input!');
        });

        it('Test with valid input', () => {
            expect(() => rentCar.calculatePriceOfCar('Renault', 3)).throw('No such model in the catalog!');
            expect(rentCar.calculatePriceOfCar('BMW', 5)).to.equal('You choose BMW and it will cost $225!');

        });

    });

    describe('Test checkBudget(costPerDay, days, budget)', () => {
        it('Test with invalid input', () => {
            expect(() => rentCar.checkBudget('a', [5, 6], null)).to.throw('Invalid input!');

        });

        it('Test with valid input', () => {
            expect(rentCar.checkBudget(20, 2, 50)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(20, 2, 40)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(25, 2, 40)).to.equal('You need a bigger budget!')
        })
    })
})