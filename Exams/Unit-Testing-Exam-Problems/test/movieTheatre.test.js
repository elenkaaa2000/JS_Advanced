import { expect } from "chai";
import {movieTheater} from '../03. Movie Theater _Resources.js'

describe('Test', ()=>{
    it('Should return an object', ()=>{
        expect(typeof movieTheater).to.equal('object')
    });

    it('Test ageRestrictions (movieRating)',()=>{
        expect(movieTheater.ageRestrictions('G')).to.equal(`All ages admitted to watch the movie`);
        expect(movieTheater.ageRestrictions('PG')).to.equal(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
        expect(movieTheater.ageRestrictions('R')).to.equal(`Restricted! Under 17 requires accompanying parent or adult guardian`);
        expect(movieTheater.ageRestrictions('NC-17')).to.equal(`No one under 17 admitted to watch the movie`);
        expect(movieTheater.ageRestrictions('')).to.equal(`There are no age restrictions for this movie`);

    });

    it('Test moneySpent (tickets, food, drinks)',()=>{
        expect(()=>movieTheater.moneySpent('a',null,true)).to.throw("Invalid input");

        expect(movieTheater.moneySpent(2,['Nachos'],['Soda'])).to.equal(`The total cost for the purchase is 38.50`);
        expect(movieTheater.moneySpent(2,['Popcorn'],['Water'])).to.equal(`The total cost for the purchase is 36.00`);
        expect(movieTheater.moneySpent(5,['Nachos'],['Water'])).to.equal(`The total cost for the purchase with applied discount is 66.00`);
        expect(movieTheater.moneySpent(5,['Popcorn'],['Soda'])).to.equal(`The total cost for the purchase with applied discount is 65.60`);
    });

    it('Test reservation (rowsArray, neededSeatsCount)',()=>{
        expect(()=>movieTheater.reservation('a',null)).to.throw("Invalid input");

        expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 5)).to.equal(2);
        expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 7)).to.equal(1);
        expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 2)).to.equal(2);
        expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 6)).to.equal(1);
    })
})