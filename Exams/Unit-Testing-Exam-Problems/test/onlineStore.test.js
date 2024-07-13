import { expect } from "chai";
import { onlineStore } from '../onlineStore.js'

describe('Test', () => {
    it('Should return an object', () => {
        expect(typeof onlineStore).to.equal('object');
    });

    it('Test isProductAvailable(product, stockQuantity)', () => {
        expect(() => onlineStore.isProductAvailable(5, 'a')).to.throw('Invalid input.');

        expect(onlineStore.isProductAvailable('orange', -1)).to.equal(`Sorry, orange is currently out of stock.`);
        expect(onlineStore.isProductAvailable('orange', 0)).to.equal(`Sorry, orange is currently out of stock.`);

        expect(onlineStore.isProductAvailable('peach', 4)).to.equal(`Great! peach is available for purchase.`);

    });

    it('Test canAffordProduct(productPrice, accountBalance)', () => {
        expect(() => onlineStore.canAffordProduct([1, 2, 3], 'a')).to.throw('Invalid input.');

        expect(onlineStore.canAffordProduct(7, 5)).to.equal("You don't have sufficient funds to buy this product.");
        expect(onlineStore.canAffordProduct(6, 5)).to.equal("You don't have sufficient funds to buy this product.");

        expect(onlineStore.canAffordProduct(5, 5)).to.equal(`Product purchased. Your remaining balance is $0.`);
        expect(onlineStore.canAffordProduct(5, 8)).to.equal(`Product purchased. Your remaining balance is $3.`);

    });

    it('Test getRecommendedProducts(productList, category)', () => {
        expect(() => onlineStore.getRecommendedProducts(1, false)).to.throw('Invalid input.');

        expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }], 'Photography')).to.equal(`Recommended products in the Photography category: Camera`);
        expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }], 'Music')).to.equal(`Sorry, we currently have no recommended products in the Music category.`);


    })
})