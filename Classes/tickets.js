function solve(array, string) {
    let result = []
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status
        }

        static sort(array, criteria) {
            return array.sort((a, b) => {
                return criteria === 'price' ?
                    a[criteria] - b[criteria] :
                    a[criteria].localeCompare(b[criteria])
            })
        }
    }

    for (let row of array) {
        let [destination, price, status] = row.split('|');
        price = Number(price);

        let ticketInfo = new Ticket(destination, price, status);
        result.push(ticketInfo)

    }

    return Ticket.sort(result, string)


}


let res = solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')

console.log(res);