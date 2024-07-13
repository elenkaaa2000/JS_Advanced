class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = []
    }
    addBook(bookName, bookAuthor) {
        if (this.capacity <= this.books.length) {
            throw new Error("Not enough space in the collection.")

        }
        this.books.push({ bookName, bookAuthor, paid: false })
        return `The ${bookName}, with an author ${bookAuthor}, collect.`

        console.log();
    }

    payBook(bookName) {
        const existBook = this.books.find(b => b.bookName === bookName);
        if (!existBook) {
            throw new Error(`${bookName} is not in the collection.`)
        } else {
            if (existBook.paid === true) {
                throw new Error(`${existBook.bookName} has already been paid.`)
            } else {
                existBook.paid = true
                return `${existBook.bookName} has been successfully paid.`
            }
        }
    }

    removeBook(bookName) {
        const existBook = this.books.find(b => b.bookName === bookName);
        if (!existBook) {
            throw new Error("The book, you're looking for, is not found.")
        }
        if (existBook.paid === false) {
            throw new Error(`${existBook.bookName} need to be paid before removing from the collection.`)
        }

        const index = this.books.indexOf(existBook)
        this.books.splice(index, 1);
        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            let result = [];
            result.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName)).map(b => {
                let paidValue = b.paid === true ? 'Has Paid' : 'Not Paid'
                result.push(`${b.bookName} == ${b.bookAuthor} - ${paidValue}.`)
            });
            return result.join('\n')
        } else {
            let findBook = this.books.find(b=>b.bookAuthor === bookAuthor);
            if(!findBook){
                throw new Error(`${bookAuthor} is not in the collection.`)
            } else {
                let paidValue = findBook.paid === true ? 'Has Paid' : "Not Paid";
                return `${findBook.bookName} == ${findBook.bookAuthor} - ${paidValue}.`
            }
        }
    }
}


const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());



