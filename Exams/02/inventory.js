class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }
    addItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        const existingItem = this.items.find(item => item.itemName === itemName);

        if (!existingItem) {
            this.items.push({ itemName, quantity })
        } else {
            existingItem.quantity += quantity
        }

        if (this.items.length > this.capacity) {
            throw new Error("The inventory is already full.")
        }

        return `Added ${quantity} ${itemName}(s) to the inventory.`

    }

    sellItem(itemName,quantity){
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        const existingItem = this.items.find(item => item.itemName === itemName);

        if(!existingItem){
            throw new Error(`The item ${itemName} is not available in the inventory.`)
        }

        if(existingItem.quantity<quantity){
            throw new Error(`Not enough ${itemName}(s) in stock.`)
        }

        existingItem.quantity-=quantity

        if(existingItem.quantity<=0){
            const itemIndex = this.items.findIndex(item => item.quantity<=0);
            this.items.splice(itemIndex,1);
            this.outOfStock.push(existingItem.itemName)
        }
        return `Sold ${quantity} ${existingItem.itemName}(s) from the inventory.`
    }

    restockItem(itemName,quantity){
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        const existingItem = this.items.find(item=>item.itemName === itemName);
        if(!existingItem){
            this.items.push({itemName,quantity})
        } else {
            existingItem.quantity+=quantity
        }

        if(this.outOfStock.includes(itemName)){
            const index = this.outOfStock.indexOf(itemName);
            this.outOfStock.splice(index,1)
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`

    }

    getInventorySummary(){
        let result = [];
        result.push("Current Inventory:");

        for(let el of this.items){
            result.push(`${el.itemName}: ${el.quantity}`)
        }
        if(this.outOfStock.length>0){
            result.push(`Out of Stock: ${this.outOfStock.join(", ")}`)
        }

        return result.join('\n');
    }
}
const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5)); 
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());



