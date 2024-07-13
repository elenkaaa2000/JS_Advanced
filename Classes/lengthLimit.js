class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    decrease(value) {
        let result = this.innerLength - value;
        this.innerLength = result < 0 ? 0 : result


    }

    increase(value) {

        this.innerLength += value
    }

    toString() {
        if (this.innerLength === 0) {
            return `...`
        }

        if (this.innerString.length > this.innerLength) {
            let result = this.innerString.substring(0, this.innerLength)
            return `${result}...`
        }
        return this.innerString
    }
}


let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
