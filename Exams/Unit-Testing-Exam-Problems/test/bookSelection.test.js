import { expect } from "chai";
import { bookSelection } from '../bookSelection.js'

describe('Test', () => {
    it('Should be an object', () => {
        expect(typeof bookSelection).to.equal('object')
    });

    it('Test isGenreSuitable (genre, age)', () => {
        expect(bookSelection.isGenreSuitable("Thriller", 10)).to.equal('Books with Thriller genre are not suitable for kids at 10 age');
        expect(bookSelection.isGenreSuitable("Horror", 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
        expect(bookSelection.isGenreSuitable("Thriller", 15)).to.equal(`Those books are suitable`);
        expect(bookSelection.isGenreSuitable("Horror", 15)).to.equal(`Those books are suitable`);

    });

    it('Test isItAffordable (price, budget)', () => {
        expect(() => bookSelection.isItAffordable('a', null)).to.throw('Invalid input');
        expect(bookSelection.isItAffordable(15, 20)).to.equal(`Book bought. You have 5$ left`);
        expect(bookSelection.isItAffordable(15, 15)).to.equal(`Book bought. You have 0$ left`);
        expect(bookSelection.isItAffordable(15, 10)).to.equal(`You don't have enough money`);

    });

    it('Test suitableTitles (books, wantedGenre)', () => {
        expect(() => bookSelection.suitableTitles('a', { name: 'Ivan' })).to.throw('Invalid input')
        expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'Thriller')).to.equal(['The Da Vinci Code'])
    })
})