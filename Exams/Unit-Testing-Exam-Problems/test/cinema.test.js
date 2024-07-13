import { expect } from "chai";
import { cinema } from '../cinema.js'

describe('Test', () => {
    it('Should return an object', () => {
        expect(typeof cinema).to.equal('object')
    })

    it('Test showMovies(movieArr)', () => {
        expect(cinema.showMovies(['Rose', 'Black', 'Papper'])).to.equal('Rose, Black, Papper');
        expect(cinema.showMovies(['Ivan', 'Black', 'Stoyan'])).to.equal('Ivan, Black, Stoyan');
        expect(cinema.showMovies(['Ivan', 'Black'])).to.equal('Ivan, Black');
        expect(cinema.showMovies(['Ivan'])).to.equal('Ivan');
        expect(cinema.showMovies([])).to.equal("There are currently no movies to show.")
    });

    it('Test ticketPrice(projectionType)', () => {
        expect(cinema.ticketPrice('Premiere')).to.equal(12.00)
        expect(cinema.ticketPrice('Normal')).to.equal(7.50)
        expect(cinema.ticketPrice('Discount')).to.equal(5.50)
        expect(() => cinema.ticketPrice('A')).to.throw('Invalid projection type.')
        expect(() => cinema.ticketPrice('Children')).to.throw('Invalid projection type.')
        expect(() => cinema.ticketPrice(12.00)).to.throw('Invalid projection type.')
        expect(() => cinema.ticketPrice(undefined)).to.throw('Invalid projection type.')
        expect(() => cinema.ticketPrice('')).to.throw('Invalid projection type.')
    });

    it('Test swapSeatsInHall(firstPlace, secondPlace)', () => {
        expect(cinema.swapSeatsInHall()).to.equal("Unsuccessful change of seats in the hall.")
        expect(cinema.swapSeatsInHall(5)).to.equal("Unsuccessful change of seats in the hall.")
        expect(cinema.swapSeatsInHall(-5, 12)).to.equal("Unsuccessful change of seats in the hall.")
        expect(cinema.swapSeatsInHall(0, 16.2)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(50, 50)).to.equal("Unsuccessful change of seats in the hall.")
        expect(cinema.swapSeatsInHall(5.0, 50)).to.equal("Unsuccessful change of seats in the hall.")

        expect(cinema.swapSeatsInHall(5, 122)).to.equal("Unsuccessful change of seats in the hall.")
        expect(cinema.swapSeatsInHall(5, 16.2)).to.equal("Unsuccessful change of seats in the hall.");
        expect(cinema.swapSeatsInHall(5, 5.0)).to.equal("Unsuccessful change of seats in the hall.")
        expect(cinema.swapSeatsInHall(5, -5)).to.equal("Unsuccessful change of seats in the hall.")
        expect(cinema.swapSeatsInHall(5, 0)).to.equal("Unsuccessful change of seats in the hall.")
        expect(cinema.swapSeatsInHall(undefined, null)).to.equal("Unsuccessful change of seats in the hall.")
       
        expect(cinema.swapSeatsInHall(50, null)).to.equal("Unsuccessful change of seats in the hall.")
        expect(cinema.swapSeatsInHall(null, 5)).to.equal("Unsuccessful change of seats in the hall.")
        expect(cinema.swapSeatsInHall(5, undefined)).to.equal("Unsuccessful change of seats in the hall.")
        expect(cinema.swapSeatsInHall(undefined, 5)).to.equal("Unsuccessful change of seats in the hall.")

        expect(cinema.swapSeatsInHall(5, '5')).to.equal("Unsuccessful change of seats in the hall.")
        expect(cinema.swapSeatsInHall('4', 5)).to.equal("Unsuccessful change of seats in the hall.")


    });

    it('Test last finction with valid data',()=>{
        expect(cinema.swapSeatsInHall(5, 7)).to.equal("Successful change of seats in the hall.")
        expect(cinema.swapSeatsInHall(5, 2)).to.equal("Successful change of seats in the hall.")
    })
})