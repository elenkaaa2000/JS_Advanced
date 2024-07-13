function juiceFlavors(data) {
    let products = new Map();
    let bottles = new Map();
    for (let row of data) {
        let [product, quantity] = row.split(' => ');
        quantity = Number(quantity);
        if (!products.has(product)) {
            products.set(product, quantity)
        } else {
            products.set(product, products.get(product) + quantity)
        }

        if (products.get(product) >= 1000) {
            let bottle = parseInt(products.get(product) / 1000);
            products.set(product, products.get(product) - bottle * 1000);
            if (!bottles.has(product)) {
                bottles.set(product, bottle)
            } else {
                bottles.set(product, bottles.get(product) + bottle)
            }

        }
    }
    for (let [k, v] of bottles) {
        console.log(`${k} => ${v}`);
    }

}
juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'])