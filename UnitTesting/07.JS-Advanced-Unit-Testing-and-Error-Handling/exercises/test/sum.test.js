import { expect } from "chai";
import { sum } from "../sum.js";

describe ('Sum', ()=>{
    it('Should return sum of numbers', ()=>{
        let expectResult = 6;
        let input = [1,2,3];
        let actualResult = sum(input);

        expect(actualResult).to.equal(expectResult)
    });

    
})