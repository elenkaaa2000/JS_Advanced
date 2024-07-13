import { expect } from "chai";
import { foodDelivery } from "../food delivery.js";

describe('Test', () => {
    it('Should return an object', () => {
        expect(typeof foodDelivery).to.equal('object')
    });

    describe('Test getCategory(category)', () => {
        it('Test with invalid input', () => {
            expect(() => foodDelivery.getCategory("Sweet")).to.throw('Invalid Category!');
        });

        it('Test with valid data', () => {
            expect(foodDelivery.getCategory('Vegan')).to.equal("Dishes that contain no animal products.");
            expect(foodDelivery.getCategory('Gluten-Free')).to.equal("Dishes that contain no gluten.");
            expect(foodDelivery.getCategory('Vegetarian')).to.equal("Dishes that contain no meat or fish.");
            expect(foodDelivery.getCategory('All')).to.equal("All available dishes.");

        });

    });

    describe('Test addMenuItem(menuItem, maxPrice)', () => {
        it('Test invalid input', () => {
            expect(() => foodDelivery.addMenuItem([1, 2, 3], 'a')).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem(null, 'a')).to.throw("Invalid Information!")
            expect(() => foodDelivery.addMenuItem({ name: 'Ivan' }, undefined)).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem([], 4)).to.throw("Invalid Information!");
        });

        it('Test with valid data', () => {
            let menuItem = [
                { name: 'fish', price: 6 },
                { name: 'rise', price: 12 },
                { name: 'beef', price: 25 }
            ]

            expect(foodDelivery.addMenuItem(menuItem, 12)).to.equal("There are 2 available menu items matching your criteria!");
            expect(foodDelivery.addMenuItem(menuItem, 7)).to.equal("There are 1 available menu items matching your criteria!");
            expect(foodDelivery.addMenuItem(menuItem, 30)).to.equal("There are 3 available menu items matching your criteria!");
            expect(foodDelivery.addMenuItem(menuItem, 5)).to.equal("There are 0 available menu items matching your criteria!");

        })
    });

    describe('Test calculateOrderCost(shipping, addons, discount)',()=>{
        it('Test with invalid data',()=>{
            expect(()=>foodDelivery.calculateOrderCost([1,2,3],[3,2,1],'a')).to.throw( "Invalid Information!");
            expect(()=>foodDelivery.calculateOrderCost([1,2,3],{name: 'Pesho'},true)).to.throw( "Invalid Information!")
            expect(()=>foodDelivery.calculateOrderCost(undefined, [3,2,1], false)).to.throw( "Invalid Information!")
            expect(()=>foodDelivery.calculateOrderCost(NaN,'error', null)).to.throw( "Invalid Information!")
        });

        it('Test with valid data', ()=>{
            expect(foodDelivery.calculateOrderCost(['standard'], ['sauce'], true)).to.equal("You spend $3.40 for shipping and addons with a 15% discount!");
            expect(foodDelivery.calculateOrderCost(['express'], ['beverage'], true)).to.equal("You spend $7.22 for shipping and addons with a 15% discount!");
            expect(foodDelivery.calculateOrderCost(['express'], ['sauce'], true)).to.equal("You spend $5.10 for shipping and addons with a 15% discount!");
            expect(foodDelivery.calculateOrderCost(['standard'], ['beverage'], true)).to.equal("You spend $5.52 for shipping and addons with a 15% discount!");

            expect(foodDelivery.calculateOrderCost(['standard'], ['sauce'], false)).to.equal("You spend $4.00 for shipping and addons!");
            expect(foodDelivery.calculateOrderCost(['express'], ['beverage'], false)).to.equal("You spend $8.50 for shipping and addons!");
           expect(foodDelivery.calculateOrderCost(['express'], ['sauce'], false)).to.equal("You spend $6.00 for shipping and addons!");
           expect(foodDelivery.calculateOrderCost(['standard'], ['beverage'], false)).to.equal("You spend $6.50 for shipping and addons!");
        })
    })

})