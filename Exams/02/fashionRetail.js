class FashionRetailInventory {
    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = []
    }

    addProduct(name, size, quantity, price) {
        const existProduct = this.productStock.find(el => el.name === name && el.size===size);
        if (existProduct) {
            existProduct.quantity += quantity;
            return `You added ${quantity} more pieces of product ${existProduct.name} size ${existProduct.size}`
        } else {
            this.productStock.push({
                name,
                size,
                quantity,
                price
            });
            return `The product ${name}, size ${size} was successfully added to the inventory`
        }

    }

    sendProduct(name, size) {
        const existProductIndex = this.productStock.findIndex(x => x.name === name);
        if (existProductIndex === -1) {
            throw new Error(`The product ${name}, size ${size} is not in the inventory`)
        } else {
           
            const removedProduct = this.productStock.splice(existProductIndex, 1)[0];
            return `The product ${removedProduct.name}, size ${removedProduct.size} was successfully removed from the inventory`
        }
    }

    findProductsBySize(size){
        const availableProducts = this.productStock.filter(x=> x.size === size);
        if(availableProducts.length === 0){
            return `There are no products available in that size`
        } else {
            const info = availableProducts.map((product) => `${product.name}-${product.quantity} pieces`).join(', ')
return info
        }
    }

    listProducts(){
        if(this.productStock.length === 0){
            return `${this.storehouse} storehouse is empty`
            
        }

        let buff = `${this.storehouse} storehouse in ${this.location} available products:\n`
        this.productStock.sort((a,b)=>a.name.localeCompare(b.name));

        let result = this.productStock.map((p)=>`${p.name}/Size:${p.size}/Quantity:${p.quantity}/Price:${p.price}$`);

        buff+=result.join('\n')
        return buff
    }
}
  const storeHouse = new FashionRetailInventory("East", "Milano");
  console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
  console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
  console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
  console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
  console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
  console.log(storeHouse.listProducts());


