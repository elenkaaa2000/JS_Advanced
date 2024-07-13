import { expect } from "chai";
import { lottery } from "../Lottery.js";

describe('Test to return object', () => {
    it('Should be an object', () => {
        expect(typeof lottery).to.equal('object')
    })
})

describe('Test buyLotteryTicket', () => {
    it('Test with invalid input', () => {
        //number, number, and boolean.
        expect(() => lottery.buyLotteryTicket('a', 5, true)).to.throw('Invalid input!');
        expect(() => lottery.buyLotteryTicket(5, 'a', true)).to.throw('Invalid input!');
        expect(() => lottery.buyLotteryTicket(5, 6, 'true')).to.throw('Invalid input!');
        expect(() => lottery.buyLotteryTicket([1, 2, 3], { name: 'Sasho' }, 'aaa')).to.throw('Invalid input!');
        expect(() => lottery.buyLotteryTicket(4, 6, false)).to.throw("Unable to buy lottery ticket!");
        expect(() => lottery.buyLotteryTicket(0, 0, true)).to.throw('Invalid input!');
        expect(() => lottery.buyLotteryTicket(-1, 5, true)).to.throw('Invalid input!');

    });

    it('Test with valid input', () => {
        expect(lottery.buyLotteryTicket(5, 6, true)).to.equal(`You bought 6 tickets for 30$.`);
    })
});

describe('Test checkTicket(ticketNumber, luckyNumbers)', () => {
    it('Test invalid input', () => {
        //arr,arr
        expect(() => lottery.checkTicket(5, [1, 2, 3])).to.throw('Invalid input!');
        expect(() => lottery.checkTicket([1, 2, 3], 'a')).to.throw('Invalid input!');
        expect(() => lottery.checkTicket(null, { name: 'Elena' })).to.throw('Invalid input!');
        expect(() => lottery.checkTicket([1, 2, 3], [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
        expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3])).to.throw('Invalid input!');
        expect(() => lottery.checkTicket([1, 2, 3], [1, 2, 3])).to.throw('Invalid input!');
    });

    it('Test valid input', () => {
        expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 7, 7, 7])).to.equal('Congratulations you win, check your reward!');
        expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 7])).to.equal('Congratulations you win, check your reward!');
        expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 7, 7])).to.equal('Congratulations you win, check your reward!');
        expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal("You win the JACKPOT!!!");
    })

});

describe('Test secondChance(ticketID, secondChanceWinningIDs)', () => {
    //num,arr
    it('Test invalid input', () => {
        expect(() => lottery.secondChance('a', 'a')).to.throw('Invalid input!');
        expect(() => lottery.secondChance('a', [1, 2, 3])).to.throw('Invalid input!');
        expect(() => lottery.secondChance(7, 'a')).to.throw('Invalid input!')
    });

    it('Test with valid input',()=>{
        expect(lottery.secondChance(5, [1,2,3,4,5,6])).to.equal("You win our second chance prize!");
        expect(lottery.secondChance(1, [1,2,3,4,5,6])).to.equal("You win our second chance prize!");
        expect(lottery.secondChance(8,[1,2,3,4,5,6])).to.equal("Sorry, your ticket didn't win!")

    })
})
