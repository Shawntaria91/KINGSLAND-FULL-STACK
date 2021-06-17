// Write a program that manages a database of tickets. A ticket has a destination, a price and a status. Your
// program will receive two arguments - the first is an array of strings for ticket descriptions and the second is a string,
// representing a sorting criterion. The ticket descriptions have the following format:
// <destinationName>|<price>|<status>
// Store each ticket and at the end of execution return a sorted summary of all tickets, sorted by either destination,
// price or status, depending on the second parameter that your program received. Always sort in ascending order
// (default behavior for alphabetical sort). If two tickets compare the same, use order of appearance. See the examples
// for more information.

//['Philadelphia|94.20|available',   'New York City|95.99|available',   'New York City|95.99|sold',   'Boston|126.20|departed'], 'destination'
function main(ticketArr, sortCriteria) {
    const outputArr = [];

    for(let ticket of ticketArr){
        let [destination, price, status] = ticket.split('|');

        class Ticket {
            constructor(destination, price, status) {
                this.destination = destination;
                this.price = price;
                this.status = status;
            }
        }
    
        let newTicket = new Ticket(destination, price, status);
        outputArr.push(newTicket);
    
        sortCriteria == "destination" ? outputArr.sort(sortByDestination) :
        sortCriteria == "price" ? outputArr.sort(sortByPrice) :
        sortCriteria == "status" ? outputArr.sort(sortByStatus) : 0;
    }   
    function sortByDestination(a, b){
        return a.destination.localeCompare(b.destination);
    }
    function sortByPrice(a, b){
        return Number(a.price) - Number(b.price);
    }
    function sortByStatus(a, b){
        return a.status.localeCompare(b.status);
    } 
    console.log(outputArr);
}

main(['Philadelphia|94.20|available',   'New York City|95.99|available',   'New York City|95.99|sold',   'Boston|126.20|departed'], 'destination' );
//[
//     Ticket { destination: 'Boston', price: '126.20', status: 'departed' },
//     Ticket {
//       destination: 'New York City',
//       price: '95.99',
//       status: 'available'
//     },
//     Ticket {
//       destination: 'New York City',
//       price: '95.99',
//       status: 'sold'
//     },
//     Ticket {
//       destination: 'Philadelphia',
//       price: '94.20',
//       status: 'available'
//     }
//]
