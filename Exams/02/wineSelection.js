class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {


        let wineData = {
            wineName,
            wineType,
            price,
            paid: false
        }

        this.wines.push(wineData);

        if (this.space < this.wines.length) {
            throw new Error("Not enough space in the cellar.")
        }

        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }

    payWineBottle(wineName, price) {
        const currentWine = this.wines.find(wine => wine.wineName === wineName);

        if (!currentWine) {
            throw new Error(`${wineName} is not in the cellar.`)
        }

        if (currentWine.paid) {
            throw new Error(`${currentWine.wineName} has already been paid.`)
        }


        this.bill += currentWine.price
        currentWine.paid = true;
        return `You bought a ${currentWine.wineName} for a ${price}$.`
    }
    openBottle(wineName) {
        const currentWine = this.wines.find(wine => wine.wineName === wineName)

        if (!currentWine) {
            throw new Error("The wine, you're looking for, is not found.")
        }

        if (currentWine.paid === false) {
            throw new Error(`${currentWine.wineName} need to be paid before open the bottle.`)
        } else {
            const currentWineIndex = this.wines.findIndex(wine => wine.wineName === wineName)
            this.wines.splice(currentWineIndex, 1)
        }

        return `You drank a bottle of ${currentWine.wineName}.`
    }

    cellarRevision(wineType) {
        if (!wineType) {
            let sorted = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
            let result = []
            result.push(`You have space for ${this.space - this.wines.length} bottles more.`)
            result.push(`You paid ${this.bill}$ for the wine.`)
            sorted.map((b) => {
                let paid = b.paid ? 'Has Paid' : 'Not Paid';
                result.push(`${b.wineName} > ${b.wineType} - ${paid}.`);
            });
            return result.join('\n').trim();
        } else {
            const existWine = this.wines.find(w => w.wineType === wineType)
            if (!existWine) {
                throw new Error(`There is no ${wineType} in the cellar.`)
            }

            let result = [];
            let paid = existWine.paid ? 'Has Paid' : 'Not Paid';
            result.push(`${existWine.wineName} > ${existWine.wineType} - ${paid}.`);
            return result.join('\n').trim();
        }
    }
}
const selection = new WineSelection(2)
console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
console.log(selection.cellarRevision('Rose'));

console.log('***************');

const selection2 = new WineSelection(5)
selection2.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection2.payWineBottle('Bodegas Godelia Mencía', 144);
selection2.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection2.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection2.cellarRevision());






