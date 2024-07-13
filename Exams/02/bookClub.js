class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }

    addBook(title, author) {
        let existTitle = this.books.find(x => x.title === title && x.author === author);

        if (existTitle) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`
        } else {
            this.books.push({ title, author });
            return `The book "${title}" by ${author} has been added to ${this.library} library.`
        }
    }

    addMember(memberName) {

        if (this.members.includes(memberName)) {
            return `Member ${memberName} is already a part of the book club.`
        } else {
            this.members.push(memberName);
            return `Member ${memberName} has been joined to the book club.`
        }
    }

    assignBookToMember(memberName, bookTitle) {
        let existMember = this.members.indexOf(memberName)
        let existTitle = this.books.findIndex(x => x.title === bookTitle);

        if (existMember === -1) {
            throw new Error(`Member ${memberName} not found.`)
        }
        if (existTitle === -1) {
            throw new Error(`Book "${bookTitle}" not found.`)
        }



        const assignedBook = this.books.splice(existTitle, 1)[0]
        return `Member ${memberName} has been assigned the book "${assignedBook.title}" by ${assignedBook.author}.`


    }
    generateReadingReport() {
        if (this.members.length == 0) {
            return "No members in the book club."
        }

        if (this.books.length === 0) {
            return "No available books in the library."
        } else {


            let buff = `Available Books in ${this.library} library:\n`
            this.books.forEach(el => buff += `"${el.title}" by ${el.author}\n`)

            return buff.trim()
        }


    }

}
const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));
console.log(myBookClub.assignBookToMember("Peter", "1984"));
console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird"));
console.log(myBookClub.generateReadingReport());



