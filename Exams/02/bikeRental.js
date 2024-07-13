class BikeRentalService {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.availableBikes = []
    }

    addBikes(data) {
        const addedBrands = []
        for (let bikeData of data) {
            let [brand, quantity, price] = bikeData.split('-');
            quantity = Number(quantity);
            price = Number(price)
            const existingBikeIndex = this.availableBikes.findIndex((bike) => bike.brand === brand);

            if (existingBikeIndex !== -1) {
                const existingBike = this.availableBikes[existingBikeIndex]
                if (quantity > existingBike.quantity) {
                    existingBike.quantity += quantity;
                    existingBike.price = Math.max(price, existingBike.price)
                }
            } else {
                this.availableBikes.push({ brand, quantity, price });
                addedBrands.push(brand)
            }
        }
        return `Successfully added ${addedBrands.join(", ")}`;
    }

    rentBikes(selectedBikes) {
        let NotAvailable = false;
        let totalPrice = 0;
        for (let rentBike of selectedBikes) {
            let [brand, quantity] = rentBike.split('-');
            quantity = Number(quantity);
            const bikeIndex = this.availableBikes.findIndex((bike) => bike.brand === brand);
            const availableCount = bikeIndex !== -1 ? this.availableBikes[bikeIndex].quantity : 0;
            if (bikeIndex === -1 || parseInt(quantity) > availableCount) {
                NotAvailable = true
            } else {
                const bikePrice = this.availableBikes[bikeIndex].price;
                totalPrice += bikePrice * parseInt(quantity);
                this.availableBikes[bikeIndex].quantity -= parseInt(quantity);
            }
        }
        if (NotAvailable) {
            return "Some of the bikes are unavailable or low on quantity in the bike rental service."
        }
        return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    returnBikes(returnedBikes) {
        let notFromOurs = false
        for (let el of returnedBikes) {
            let [brand, quantity] = el.split('-');
            let bikeIndex = this.availableBikes.findIndex((bike) => bike.brand === brand);
            if (bikeIndex === -1) {
                notFromOurs = true

            } else {
                notFromOurs = false
                quantity = parseInt(quantity);
                this.availableBikes[bikeIndex].quantity += quantity
            }
        }
        if (notFromOurs) {
            return "Some of the returned bikes are not from our selection."
        }
        return "Thank you for returning!"


    }

    revision() {
        let result = []
         result.push(`Available bikes:`)
        let sortedBikes = this.availableBikes.sort((a, b) => a.price - b.price);

        for (let bike of sortedBikes) {
            result.push(`${bike.brand} quantity:${bike.quantity} price:$${bike.price}`)

        }

        result.push(`The name of the bike rental service is ${this.name}, and the location is ${this.location}`)
        return result.join('\n')
    }

}



const rentalService = new BikeRentalService("MyBikes", "CityCenter");

console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
console.log(rentalService.rentBikes(["Mountain Bike-5", "City Bike-5"]));
console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3"]));
console.log(rentalService.revision());
