import { assert, expect } from "chai";
import { workforceManagement } from "../workforceManagement.js";

describe('Check to be an object', () => {
    it('Should be an object', () => {
        assert(typeof workforceManagement, 'object')
    });

    it('Test recriutStaff()', ()=>{
        expect(()=>workforceManagement.recruitStaff('Elena', 'QA', 5)).to.throw('We are not currently hiring for this role.');
        expect(()=>workforceManagement.recruitStaff('Elena', 'QA', null)).to.throw('We are not currently hiring for this role.');        
        expect(()=>workforceManagement.recruitStaff('Bob Johnson', 'Tester', 2)).to.throw('We are not currently hiring for this role.');
        expect(workforceManagement.recruitStaff('Elena', 'Developer', 2)).to.equal('Elena is not suitable for this role.');
        expect(workforceManagement.recruitStaff('Ivan', 'Developer', 4)).to.equal('Ivan has been successfully recruited for the role of Developer.')
        expect(workforceManagement.recruitStaff('Rose', 'Developer', 7)).to.equal('Rose has been successfully recruited for the role of Developer.')
    });

    it('Test computeWages()', ()=>{
        expect(()=>{workforceManagement.computeWages('40')}).to.throw('Invalid hours');
        expect(()=>{workforceManagement.computeWages([1,2,3])}).to.throw('Invalid hours')
        expect(()=>{workforceManagement.computeWages('')}).to.throw('Invalid hours');
        expect(()=>{workforceManagement.computeWages({name: 'Ivan'})}).to.throw('Invalid hours');
        expect(()=>{workforceManagement.computeWages(null)}).to.throw('Invalid hours');
        expect(()=>{workforceManagement.computeWages(-5)}).to.throw('Invalid hours');
        expect(workforceManagement.computeWages(0)).to.equal(0);
        expect(workforceManagement.computeWages(40)).to.equal(720);
        expect(workforceManagement.computeWages(160)).to.equal(2880);
        expect(workforceManagement.computeWages(200)).to.equal(5100);

    });

    it('Test dismissEmployee',()=>{
       const workForce = ['Ivan', 'Elena', 'Maria', 'Pesho'];
       expect(()=>workforceManagement.dismissEmployee(workForce, 'a')).to.throw('Invalid input');
       expect(()=>workforceManagement.dismissEmployee(workForce, 6)).to.throw('Invalid input');
       expect(()=>workforceManagement.dismissEmployee(workForce, -5)).to.throw('Invalid input');
       expect(()=>workforceManagement.dismissEmployee(workForce, null)).to.throw('Invalid input');
       expect(()=>workforceManagement.dismissEmployee('workForce', 'a')).to.throw('Invalid input');
       expect(()=>workforceManagement.dismissEmployee({workForce}, 'a')).to.throw('Invalid input');
       expect(()=>workforceManagement.dismissEmployee('', 'a')).to.throw('Invalid input');
       expect(()=>workforceManagement.dismissEmployee(4, 5)).to.throw('Invalid input');
       expect(workforceManagement.dismissEmployee(workForce, 2)).to.equal('Ivan, Elena, Pesho')


    })
});


    
