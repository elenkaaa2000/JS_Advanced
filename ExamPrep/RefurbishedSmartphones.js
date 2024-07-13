class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {
        if (!model || !storage || !price || !condition) {
            throw new Error("Invalid smartphone!")
        }

        let addedSmartphone = { model, storage, price, condition }
        this.availableSmartphones.push(addedSmartphone);

        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`
    }

    sellSmartphone(model, desiredStorage) {
        let soldPrice = 0;

        let foundPhone = this.availableSmartphones.find(x => x.model == model);

        if (!foundPhone) {
            throw new Error(`${model} was not found!`)
        } else {
            if (foundPhone.storage >= desiredStorage) {
                soldPrice = foundPhone.price
            } else if (Math.abs(foundPhone.storage - desiredStorage) <= 128) {
                soldPrice = foundPhone.price - foundPhone.price * 0.10
            } else {
                soldPrice = foundPhone.price - foundPhone.price * 0.20
            }
            this.soldSmartphones.push({
                model: foundPhone.model,
                storage: foundPhone.storage, soldPrice
            });
            this.availableSmartphones.filter(x => x.model !== model);
            this.revenue += soldPrice;
            return `${model} was sold for ${soldPrice.toFixed(2)}$`

        }

    }

    upgradePhones() {
        if (this.availableSmartphones.length === 0) {
            throw new Error("There are no available smartphones!")
        }

        this.availableSmartphones = this.availableSmartphones.map((phone) => {
            const doubledStorage = phone.storage * 2;
            const roundedPrice = phone.price.toFixed(2);
            return {
                ...phone,
                storage: doubledStorage,
                price: roundedPrice,
            };
        });

        const availablePhones = this.availableSmartphones
            .map(
                (phone) =>
                    `${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price}$`
            )
            .join("\n");

        return `Upgraded Smartphones:\n${availablePhones}`;
    }

    salesJournal(criteria) {
        if (criteria !== 'storage' && criteria !== 'model') {
            throw new Error('Invalid criteria!')
        }

        if (criteria === 'storage') {
            const sortedStorage = this.soldSmartphones.sort((a, b) => {
                return b.storage - a.storage
            })
        }

        if (criteria === 'model') {
            const sortedModel = this.soldSmartphones.sort((a, b) => {
                return a.model.localeCompare(b.model)
            })
        }
        let buff = `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$\n`
        buff += `${this.soldSmartphones.length} smartphones sold:\n`;

        this.soldSmartphones.forEach((s) => buff += `${s.model} / ${s.storage} GB / ${s.soldPrice.toFixed(2)}$\n`)
        return buff.trim()

    }

}
/*let retailer = new RefurbishedSmartphones('SecondLife Devices');
console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
console.log(retailer.addSmartphone('', 512, 1900, 'good'));*/


let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));




