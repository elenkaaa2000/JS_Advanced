class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = []
    }
    loadingVegetables(vegetables) {
        vegetables.map(product => {
            let [type, quantity, price] = product.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            let existProduct = this.availableProducts.find(p => p.type === type);
            if (!existProduct) {
                this.availableProducts.push({
                    type,
                    quantity: quantity,
                    price: price
                })
            } else {
                existProduct.quantity += quantity;
                if (existProduct.price < price) {
                    existProduct.price = price
                }
            }
        })
        let result = this.availableProducts.map(p => p.type)
        return `Successfully added ${result.join(', ')}`

    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        selectedProducts.map(selectProduct => {
            let [type, quantity] = selectProduct.split(' ');
            quantity = Number(quantity);

            let existProduct = this.availableProducts.find(p => p.type === type);

            if (!existProduct) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            } else {
                if (existProduct.quantity < quantity) {
                    throw new Error(`The quantity ${quantity} for the vegetable ${existProduct.type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
                } else {
                    let currentPrice = quantity * existProduct.price;
                    totalPrice += currentPrice;
                    existProduct.quantity -= quantity
                }
            }
        });
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }
    rottingVegetable(type, quantity) {
        let existProduct = this.availableProducts.find(p => p.type === type);

        if (!existProduct) {
            throw new Error(`${type} is not available in the store.`)
        }

        if (quantity > existProduct.quantity) {
            existProduct.quantity = 0;
            return `The entire quantity of the ${existProduct.type} has been removed.`
        } else {
            existProduct.quantity -= quantity;
            return `Some quantity of the ${existProduct.type} has been removed.`

        }
    }
    revision(){
        let result = [];
        result.push("Available vegetables:");
        this.availableProducts.sort((a,b)=>a.price-b.price).map(p=>{
            result.push(`${p.type}-${p.quantity}-$${p.price}`)
        });

        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return result.join('\n')
    }


}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());


