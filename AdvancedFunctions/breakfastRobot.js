function breakfastRobot() {
    //protein, carbohydrate, fat, and flavours
    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let recipeBook = {
        apple: { 
            flavour: 2,
            carbohydrate:1
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            flavour: 3,
            fat: 7
        },
        eggs: {   
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    return function (data) {
        let [action, type, qty] = data.split(' ');

        switch (action) {
            case 'restock': return restock(type, qty); 
            case 'prepare': return prepare(type,qty); 

            case 'report': return report(); 
        }
    }
function report(){
    let result = []
   let reportStorage = Object.entries(storage);
   for(let el of reportStorage){
    result.push(`${el[0]}=${el[1]}`)
   }
   return result.join(' ')
}

    function restock(type, qty) {
        storage[type] += Number(qty);
        return 'Success'
    }

    function prepare(type, qty) {
        let preparedProduct = {}
        for (let [el, value] of Object.entries(recipeBook[type])) {
            let needProducts = qty * value;
            if (storage[el] < needProducts) {
                return `Error: not enough ${el} in stock`
            }
            preparedProduct[el] = needProducts;

            for (let [el, value] of Object.entries(preparedProduct)) {
                storage[el] -= value
            }
            return 'Success';
        }
    }
}
let manager = breakfastRobot()
console.log(manager("restock flavour 50"));
console.log(manager("report"));