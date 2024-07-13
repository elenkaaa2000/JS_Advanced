import { expect } from "chai";
import { petAdoptionAgency } from "../petAdoption.js";

describe('Test petAdoptionAgency should be an object', () => {
    it('petAdoptionAgency should be an object', () => {
        expect(typeof petAdoptionAgency).to.equal('object')
    });
});

describe('Test isPetAvailable(pet, availableCount, vaccinated)', () => {
    describe('Test incorrect input parameters', () => {
        it('Pet should be a string', () => {
            expect(() => petAdoptionAgency.isPetAvailable(5, 5, true)).to.throw('Invalid input');
            expect(() => petAdoptionAgency.isPetAvailable(null, 5, true)).to.throw('Invalid input');
            expect(() => petAdoptionAgency.isPetAvailable([1, 2, 3], 5, true)).to.throw('Invalid input');
            expect(() => petAdoptionAgency.isPetAvailable({ name: 'Elena' }, 5, true)).to.throw('Invalid input');
        });
        describe('Test availableCount', () => {
            it('Should be a number', () => {
                expect(() => petAdoptionAgency.isPetAvailable('Cat', '2', true)).to.throw('Invalid input');
                expect(() => petAdoptionAgency.isPetAvailable('Cat', null, true)).to.throw('Invalid input');
                expect(() => petAdoptionAgency.isPetAvailable('Cat', true, true)).to.throw('Invalid input');
                expect(() => petAdoptionAgency.isPetAvailable('Cat', [1, 2, 3], true)).to.throw('Invalid input');
                expect(() => petAdoptionAgency.isPetAvailable('Cat', { number: 5 }, true)).to.throw('Invalid input');
            });
        });

        describe('Test vaccinated', () => {
            it('Should be boolean', () => {
                expect(() => petAdoptionAgency.isPetAvailable('Cat', 2, 'true')).to.throw('Invalid input');
                expect(() => petAdoptionAgency.isPetAvailable('Cat', 2, 1)).to.throw('Invalid input');
                expect(() => petAdoptionAgency.isPetAvailable('Cat', 2, { boolean: true })).to.throw('Invalid input');
                expect(() => petAdoptionAgency.isPetAvailable('Cat', 2, [1, 2, 3])).to.throw('Invalid input');
            })
        })
    });

    describe('Test with valid input', () => {
        it('Should be available count', () => {
            expect(petAdoptionAgency.isPetAvailable('Cat', 0, true)).to.equal(`Sorry, there are no Cat(s) available for adoption at the agency.`);
            expect(petAdoptionAgency.isPetAvailable('Cat', -1, true)).to.equal(`Sorry, there are no Cat(s) available for adoption at the agency.`);
        });

        it('Test vaccinated', () => {
            expect(petAdoptionAgency.isPetAvailable('Cat', 1, true)).to.equal(`Great! We have 1 vaccinated Cat(s) available for adoption at the agency.`);
            expect(petAdoptionAgency.isPetAvailable('Cat', 1, false)).to.equal(`Great! We have 1 Cat(s) available for adoption, but they need vaccination.`);
        })
    })

});

describe('Test getRecommendedPets(petList, desiredTraits)', () => {

    describe('Test invalid input', () => {
        const petList = [
            { name: "Fluffy", traits: "Playful" },
            { name: "Whiskers", traits: "Cuddly" },
            { name: "Fido", traits: "Playful" },
        ];

        it('Should return invalid input', () => {
            expect(() => petAdoptionAgency.getRecommendedPets(petList, 5)).to.throw('Invalid input');
            expect(() => petAdoptionAgency.getRecommendedPets(petList, [1, 2, 3])).to.throw('Invalid input');
            expect(() => petAdoptionAgency.getRecommendedPets(petList, { name: 'Pesho' })).to.throw('Invalid input');
            expect(() => petAdoptionAgency.getRecommendedPets(petList, null)).to.throw('Invalid input');

            expect(() => petAdoptionAgency.getRecommendedPets('petlist', 'Playfull')).to.throw('Invalid input');
            expect(() => petAdoptionAgency.getRecommendedPets(5, 'Playfull')).to.throw('Invalid input');
            expect(() => petAdoptionAgency.getRecommendedPets(null, 'Playfull')).to.throw('Invalid input');

        });

        it('Should return Recommended pets with the desired traits', () => {
            expect(petAdoptionAgency.getRecommendedPets(petList, 'Playful')).to.equal(`Recommended pets with the desired traits (Playful): Fluffy, Fido`);
        });

        it('Should return "Sorry"', () => {
            expect(petAdoptionAgency.getRecommendedPets(petList, 'Stubborn')).to.equal(`Sorry, we currently have no recommended pets with the desired traits: Stubborn.`)
        })
    })
});

describe('Test adoptPet(pet, adopterName)', () => {
    describe('Test invalid parameters', () => {
        it('Should throw an error if input params are not strings', () => {
            expect(() => petAdoptionAgency.adoptPet(1, 'Ivan')).to.throw('Invalid input');
            expect(() => petAdoptionAgency.adoptPet(null, 'Ivan')).to.throw('Invalid input');
            expect(() => petAdoptionAgency.adoptPet([1, 2, 3], 'Ivan')).to.throw('Invalid input');
            expect(() => petAdoptionAgency.adoptPet({ name: 'Ivan' }, 'Ivan')).to.throw('Invalid input');

            expect(() => petAdoptionAgency.adoptPet('Dog', 1)).to.throw('Invalid input');
            expect(() => petAdoptionAgency.adoptPet('Dog', null)).to.throw('Invalid input');
            expect(() => petAdoptionAgency.adoptPet('Dog', [1, 2, 3])).to.throw('Invalid input');
            expect(() => petAdoptionAgency.adoptPet('Dog', { name: 'Pesho' })).to.throw('Invalid input');
            expect(() => petAdoptionAgency.adoptPet([1, 2, 3], 1)).to.throw('Invalid input');
        })
    });

    describe('Test valid input', () => {
        it('Should return `Congratulations`', () => {
            expect(petAdoptionAgency.adoptPet('Dog', 'Ayra')).to.equal(`Congratulations, Ayra! You have adopted Dog from the agency. Enjoy your time with your new furry friend!`)
        })
    })
})