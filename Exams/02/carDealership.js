class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (!model || !horsepower || !price || !mileage) {
            throw new Error('Invalid input!')
        }

        price = price.toFixed(2);
        mileage = mileage.toFixed(2);

        const newCar = {
            model,
            horsepower,
            price,
            mileage
        }

        this.availableCars.push(newCar);

        return `New car added: ${model} - ${horsepower} HP - ${mileage} km - ${price}$`
    }

    sellCar(model, desiredMileage) {
        let existCar = this.availableCars.find(c => c.model === model);
        let soldPrice = 0;

        if (!existCar) {
            throw new Error(`${model} was not found!`)
        }

        if (existCar.mileage <= desiredMileage) {
            soldPrice = existCar.price;
        } else {
            let difference = existCar.mileage - desiredMileage
            if (difference <= 40000) {
                soldPrice = (existCar.price - (existCar.price * 0.05)).toFixed(2)
            } else {
                soldPrice = (existCar.price - (existCar.price * 0.10)).toFixed(2)
            }
        }


        let soldCarModel = existCar.model;
        let soldCarHousepower = existCar.horsepower;
        this.soldCars.push({ model: soldCarModel, horsepower: soldCarHousepower, soldPrice });
        this.availableCars.splice(existCar, 1);
        this.totalIncome += Number(soldPrice);
        

        return `${existCar.model} was sold for ${soldPrice}$`
    }

    currentCar() {
        if (this.availableCars.length === 0) {
            return "There are no available cars"
        } else {
            let result = [];
            result.push(`-Available cars:`);
            this.availableCars.map(c => {
                result.push(`---${c.model} - ${c.horsepower} HP - ${c.mileage} km - ${c.price}$`)
            });

            return result.join('\n')
        }
    }
    salesReport(criteria) {
        if (!criteria == "horsepower" && !criteria == "model") {
            throw new Error('Invalid criteria!')
        }

        let sortedCars;
        if (criteria === 'horsepower') {
            sortedCars = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if (criteria === 'model') {
            sortedCars = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }
        let result = [];
        result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        result.push(`-${this.soldCars.length} cars sold:`);
        sortedCars.map(c => {
            result.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice}$`)
        });

        return result.join('\n')
    }
}


let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('model'));

