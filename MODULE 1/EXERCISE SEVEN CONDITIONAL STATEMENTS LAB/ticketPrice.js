//Calculate price based on ticket type

function main(ticket) {
    if (ticket == "student") {
        console.log(`$1.60`);
    } else if (ticket == "regular") {
        console.log(`$1.00`);
    } else {
        console.log("Invalid ticket type!");
    }
}
main("student");