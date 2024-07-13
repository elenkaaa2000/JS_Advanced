class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.")
        } else {

            this.plants.push({
                plantName,
                spaceRequired,
                ripe: false,
                quantity: 0
            })
            this.spaceAvailable -= spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`

        }
    }

    ripenPlant(plantName, quantity) {
        let existPlant = this.plants.find(plant => plant.plantName === plantName);

        if (!existPlant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.")
        }
        if (existPlant.ripe === true) {
            throw new Error(`The ${existPlant.plantName} is already ripe.`)
        }
        existPlant.ripe === true;
        existPlant.quantity += quantity;
        if (existPlant.quantity === 1) {
            return `${existPlant.quantity} ${existPlant.plantName} has successfully ripened.`
        } else if (existPlant.quantity > 1) {
            return `${existPlant.quantity} ${existPlant.plantName}s have successfully ripened.`
        }

    }

    harvestPlant(plantName) {
        let existPlant = this.plants.find(plant => plant.plantName === plantName);
        if (!existPlant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        if (existPlant.ripe === false) {
            throw new Error(`The ${existPlant.plantName} cannot be harvested before it is ripe.`)
        } else {
            let existPlantIndex = this.plants.findIndex(p => p.plantName === plantName);

            this.spaceAvailable += existPlant.spaceRequired
            let name = existPlant.plantName;
            let plantQuantity = existPlant.quantity
            this.plants.splice(existPlantIndex, 1);
            this.storage.push({ name, plantQuantity });
            return `The ${name} has been successfully harvested.`
        }
    }

    generateReport() {
        let result = [];
        result.push(`The garden has ${this.spaceAvailable} free space left.`);

        let sorted = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName)).map(p => p.plantName);
        result.push(`Plants in the garden: ${sorted.join(', ')}`);

        if (this.storage.length === 0) {
            result.push("Plants in storage: The storage is empty.")

        } else {
            let res = this.storage.map(p => p.name);
            result.push(`Plants in storage: ${res.join(', ')}`)

        }

        return result.join('\n')
    }


}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());





