import { assert, expect } from "chai";
import { weddingDay } from "../weddingDay.js"

describe("Test to be an object", () => {
    it('Should be an object', () => {
        expect(typeof (weddingDay)).to.equal('object')
    })
})

describe("Test pickVanue()", () => {
    it('Test invalid input', () => {
        expect(() => weddingDay.pickVenue(7, 5, '')).throw('Invalid Information!');
        expect(() => weddingDay.pickVenue(7, 5, 5)).throw('Invalid Information!');
        expect(() => weddingDay.pickVenue(7, 5, [1, 2, 3])).throw('Invalid Information!');
        expect(() => weddingDay.pickVenue(7, 5, { name: 'Varna' })).throw('Invalid Information!');

        expect(() => weddingDay.pickVenue(7, "5", "Varna")).throw('Invalid Information!')
        expect(() => weddingDay.pickVenue(7, [1, 2, 3], "Varna")).throw('Invalid Information!')
        expect(() => weddingDay.pickVenue(7, { name: 'Ivan' }, 'Varna')).throw('Invalid Information!')
        expect(() => weddingDay.pickVenue(7, null, 'Butgas')).throw('Invalid Information!')

        expect(() => weddingDay.pickVenue("5", 7, "Varna")).throw('Invalid Information!')
        expect(() => weddingDay.pickVenue([1, 2, 3], 7, "Varna")).throw('Invalid Information!')
        expect(() => weddingDay.pickVenue({ name: 'Ivan' }, 7, 'Varna')).throw('Invalid Information!')
        expect(() => weddingDay.pickVenue(null, 7, 'Butgas')).throw('Invalid Information!')

    });

    it('Expext error when location is not Varna', () => {
        expect(() => weddingDay.pickVenue(7, 50, 'Sofia')).to.throw("The location of this venue is not in the correct area!")
    });

    it('Venue met the correct requirements', () => {
        //⦁	If the capacity of the venue is greater or equal to 150, and pricePerGuest is less or equal to 120 return the string: 
        expect(weddingDay.pickVenue(150, 120, 'Varna')).to.equal(`This venue meets the requirements, with capacity of 150 guests and 120$ cover.`);
        expect(weddingDay.pickVenue(160, 120, 'Varna')).to.equal(`This venue meets the requirements, with capacity of 160 guests and 120$ cover.`);
        expect(weddingDay.pickVenue(160, 100, 'Varna')).to.equal(`This venue meets the requirements, with capacity of 160 guests and 100$ cover.`);
        expect(weddingDay.pickVenue(150, 100, 'Varna')).to.equal(`This venue meets the requirements, with capacity of 150 guests and 100$ cover.`);
    });

    it('Venue not met correct requirements', () => {
        expect(weddingDay.pickVenue(100, 120, 'Varna')).to.equal("This venue does not meet your requirements!");
        expect(weddingDay.pickVenue(150, 200, 'Varna')).to.equal("This venue does not meet your requirements!");
        expect(weddingDay.pickVenue(100, 200, 'Varna')).to.equal("This venue does not meet your requirements!");
    });

    describe('Test otherSpendings (weddingDecoration, photography, discount)', () => {
        it('Test invalid input', () => {
            //an array, array and Boolean,
            expect(() => weddingDay.otherSpendings(1, [1, 2, 3], true)).to.throw('Invalid Information!');
            expect(() => weddingDay.otherSpendings('a', [1, 2, 3], true)).to.throw('Invalid Information!');
            expect(() => weddingDay.otherSpendings(true, [1, 2, 3], true)).to.throw('Invalid Information!');
            expect(() => weddingDay.otherSpendings({ name: 'Ivan' }, [1, 2, 3], true)).to.throw('Invalid Information!');

            expect(() => weddingDay.otherSpendings([1, 2, 3], 1, true)).to.throw('Invalid Information!');
            expect(() => weddingDay.otherSpendings([1, 2, 3], 'a', true)).to.throw('Invalid Information!');
            expect(() => weddingDay.otherSpendings([1, 2, 3], null, true)).to.throw('Invalid Information!');
            expect(() => weddingDay.otherSpendings([1, 2, 3], { name: 'Ivan' }, true)).to.throw('Invalid Information!');

            expect(() => weddingDay.otherSpendings([1, 2, 3], [1, 2, 3], 'true')).to.throw('Invalid Information!');
            expect(() => weddingDay.otherSpendings([1, 2, 3], [1, 2, 3], 1)).to.throw('Invalid Information!');
            expect(() => weddingDay.otherSpendings([1, 2, 3], [1, 2, 3], { name: 'Sofia' })).to.throw('Invalid Information!');
            expect(() => weddingDay.otherSpendings([1, 2, 3], [1, 2, 3], null)).to.throw('Invalid Information!');

        });

        it("Test with correct input", () => {
            expect(weddingDay.otherSpendings(['flowers', 'fabric drapes and curtains'], [], true)).to.equal(`You spend 425$ for wedding decoration and photography with 15% discount!`);
            expect(weddingDay.otherSpendings(['flowers', 'fabric drapes and curtains'], ['picture', 'video'], true)).to.equal(`You spend 1530$ for wedding decoration and photography with 15% discount!`);
            expect(weddingDay.otherSpendings([], ['picture', 'video'], true)).to.equal(`You spend 1105$ for wedding decoration and photography with 15% discount!`);
            expect(weddingDay.otherSpendings(['flowers', 'fabric drapes and curtains'], ['picture'], true)).to.equal(`You spend 425$ for wedding decoration and photography with 15% discount!`);
            expect(weddingDay.otherSpendings(['flowers', 'fabric drapes and curtains'], ['video'], true)).to.equal(`You spend 1530$ for wedding decoration and photography with 15% discount!`);
            expect(weddingDay.otherSpendings(['flowers'], ['picture', 'video'], true)).to.equal(`You spend 1530$ for wedding decoration and photography with 15% discount!`);
            expect(weddingDay.otherSpendings(['fabric drapes and curtains'], ['picture', 'video'], true)).to.equal(`You spend 1105$ for wedding decoration and photography with 15% discount!`);

            expect(weddingDay.otherSpendings(['flowers', 'fabric drapes and curtains'], [], false)).to.equal(`You spend 500$ for wedding decoration and photography!`)
            expect(weddingDay.otherSpendings(['flowers', 'fabric drapes and curtains'], ['picture', 'video'], false)).to.equal(`You spend 1800$ for wedding decoration and photography!`)
            expect(weddingDay.otherSpendings(['flowers', 'fabric drapes and curtains'], ['picture'], false)).to.equal(`You spend 500$ for wedding decoration and photography!`)
            expect(weddingDay.otherSpendings(['flowers', 'fabric drapes and curtains'], ['video'], false)).to.equal(`You spend 1800$ for wedding decoration and photography!`)
            expect(weddingDay.otherSpendings(['flowers',], ['picture', 'video'], false)).to.equal(`You spend 1800$ for wedding decoration and photography!`)
            expect(weddingDay.otherSpendings(['fabric drapes and curtains'], ['picture', 'video'], false)).to.equal(`You spend 1300$ for wedding decoration and photography!`)
            expect(weddingDay.otherSpendings([], ['picture', 'video'], false)).to.equal(`You spend 1300$ for wedding decoration and photography!`)
        });

        describe('Test tableDistribution (guests, tables)', () => {
            it('Test invalid input', () => {
                expect(() => weddingDay.tableDistribution(-5, 5)).to.throw('Invalid Information!');
                expect(() => weddingDay.tableDistribution(5, -5)).to.throw('Invalid Information!');
                expect(() => weddingDay.tableDistribution('a', 5)).to.throw('Invalid Information!');
                expect(() => weddingDay.tableDistribution(5, [1, 2, 3])).to.throw('Invalid Information!');
                expect(() => weddingDay.tableDistribution(0, 0)).to.throw('Invalid Information!');

            });

            it('Expect to return "There is only {peopleOnTable} people on every table, you can join some tables."', () => {
                expect(weddingDay.tableDistribution(6, 2)).to.equal("There is only 3 people on every table, you can join some tables.");
                expect(weddingDay.tableDistribution(20, 4)).to.equal("There is only 5 people on every table, you can join some tables.");
            });

            it('Expect "You have {tables} tables with {peopleOnTable} guests on table."', () => {
                expect(weddingDay.tableDistribution(50, 5)).to.equal("You have 5 tables with 10 guests on table.");

            })
        })
    })
})