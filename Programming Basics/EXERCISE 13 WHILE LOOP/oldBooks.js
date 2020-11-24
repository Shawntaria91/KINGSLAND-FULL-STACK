function main(bookNeeded, capacity, booksThere) {
    let count = 0;
    let currentCheck = booksThere.shift();
    while (count <= capacity) {
        if (currentCheck != bookNeeded) {
            count++;
            currentCheck = booksThere.shift();
        } else {
            console.log(`You checked ${count} books and found it.`);
            break;
        }
    }

    if ((currentCheck != bookNeeded) && (count > capacity)) {
    console.log("The book you searched for is not here!");
    console.log(`You checked ${capacity} books.`);
    }
}
main("Troy", 8, ["Stronger", "Life Style", "Troy"]);