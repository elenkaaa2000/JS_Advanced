import { expect } from "chai";
import { planYourTrip } from "../planYouTrip.js";

describe('Test', () => {
    it('Should be an object', () => {
        expect(typeof planYourTrip).to.equal('object')
    });

    it('Test choosingDestination()', () => {
        expect(() => planYourTrip.choosingDestination('Ski Resort', 'Winter', 2023)).to.throw(`Invalid Year!`);
        expect(planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024)).to.equal('Great choice! The Winter is the perfect time to visit the Ski Resort.');
        expect(planYourTrip.choosingDestination('Ski Resort', 'Summer', 2024)).to.equal(`Consider visiting during the Winter for the best experience at the Ski Resort.`)
        expect(() => planYourTrip.choosingDestination('Maldives', 'Winter', 2024)).to.throw(`This destination is not what you are looking for.`);
    });

    it('Test exploreOptions(activities, activityIndex)', () => {
        const activities = ["Skiing", "Snowboarding", "Winter Hiking"];

        expect(() => planYourTrip.exploreOptions(activities, 'a')).to.throw('Invalid Information!');
        expect(() => planYourTrip.exploreOptions(activities, 5)).to.throw('Invalid Information!');
        expect(() => planYourTrip.exploreOptions(activities, -1)).to.throw('Invalid Information!');
        expect(() => planYourTrip.exploreOptions(activities, 5.3)).to.throw('Invalid Information!');

        expect(() => planYourTrip.exploreOptions('activities', 2)).to.throw('Invalid Information!');
        expect(() => planYourTrip.exploreOptions(5, 'a')).to.throw('Invalid Information!');
        expect(() => planYourTrip.exploreOptions({ activities }, 'a')).to.throw('Invalid Information!');

        expect(planYourTrip.exploreOptions(activities, 2)).to.equal('Skiing, Snowboarding');
    });

    it('Test estimateExpenses (distanceInKilometers, fuelCostPerLiter)', () => {
        expect(() => planYourTrip.estimateExpenses('a', 5)).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses('a', 'a')).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses(5, '5')).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses({ 5: 'Ivan' }, 5)).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses(5, { Ivan: '5' })).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses([2, 3], 5)).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses('a', [2, 4])).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses(-1, 5)).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses(2, -5)).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses(0, 5)).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses(5, 0)).to.throw('Invalid Information!');
        expect(() => planYourTrip.estimateExpenses(0, 0)).to.throw('Invalid Information!');

        expect(planYourTrip.estimateExpenses(50, 10)).to.equal(`The trip is budget-friendly, estimated cost is $500.00.`);
        expect(planYourTrip.estimateExpenses(5, 10)).to.equal(`The trip is budget-friendly, estimated cost is $50.00.`);

        expect(planYourTrip.estimateExpenses(50, 50)).to.equal(`The estimated cost for the trip is $2500.00, plan accordingly.`);
    })
});

