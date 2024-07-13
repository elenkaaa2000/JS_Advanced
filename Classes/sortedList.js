class List {
    constructor() {
        this.sortedList = [];
        this.size = this.sortedList.length

    }

    add(value) {
        this.sortedList.push(value);
        this.sortedList.sort((a, b) => a - b);
        this.size++
    };

    remove(index) {
        if (index < 0 || index >= this.size) {
            throw new Error(`Index doesn't exist`);
        }

        let el = this.sortedList[index];
        this.sortedList.splice(index, 1);
        this.size--


        return el
    };

    get(index) {
        if (index < 0 || index >= this.sortedList.length) {
            throw new Error(`Index doesn't exist`);
        }

        let el = this.sortedList[index];
        return el
    }


}


let list = new List();
list.add(6);
list.add(5);
list.add(7);

console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
