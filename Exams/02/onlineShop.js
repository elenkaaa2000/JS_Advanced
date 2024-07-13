class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }
    loadingStore(product, quantity, spaceRequired) {

        const productData = {
            product,
            quantity
        }

        this.products.push(productData)
        this.warehouseSpace -= spaceRequired;

        if (this.warehouseSpace < this.products.length) {
            throw new Error("Not enough space in the warehouse.")
        }

        return `The ${product} has been successfully delivered in the warehouse.`
    }

    quantityCheck(product, minimalQuantity) {
        const existProduct = this.products.find(p => p.product === product)

        if (!existProduct) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }

        if (minimalQuantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`)
        }

        if (minimalQuantity <= existProduct.quantity) {
            return `You have enough from product ${existProduct.product}.`
        } else {

            const difference = minimalQuantity - existProduct.quantity
            existProduct.quantity = minimalQuantity

            return `You added ${difference} more from the ${existProduct.product} products.`
        }
    }
    sellProduct(product) {
        const existProduct = this.products.find(p => p.product === product);
        if (!existProduct) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }

        existProduct.quantity -= 1;
        this.sales.push({ product, quantity: 1 });

        return `The ${product} has been successfully sold.`
    }

    revision() {
        let result = []
        if (this.sales.length === 0) {
            throw new Error(`There are no sales today!`)
        } else {
            result.push(`You sold ${this.sales.length} products today!`)
        }
        result.push("Products in the warehouse:")

        result.push(this.products.map(p => `${p.product}-${p.quantity} more left`).join('\n'))

        return result.join('\n')

    }

}
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());


