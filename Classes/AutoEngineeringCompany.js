function carsStore(data) {
    let store = new Map()
    class Cars {
        constructor(brand) {
            this.brand = brand;
            this.carsModelStore = new Map()
        }

        addCar(model, quantity) {
            if (!this.carsModelStore.has(model)) {
                this.carsModelStore.set(model, 0)
            }
            this.carsModelStore.set(model, this.carsModelStore.get(model) + quantity)
        }

        toString() {
            let buff = this.brand + '\n'
            for (let [model, price] of this.carsModelStore) {
                buff += `###${model} -> ${price}\n`
            }

            return buff.trim()
        }
    }

    for (let row of data) {
        let [brand, model, price] = row.split(' | ');
        price = Number(price);

        if (!store.has(brand)) {
            store.set(brand, new Cars(brand))
        }

        store.get(brand).addCar(model, price)
    }

    for (let [brand, carsDate] of store) {
        console.log(carsDate.toString());
    }
}
carsStore(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])