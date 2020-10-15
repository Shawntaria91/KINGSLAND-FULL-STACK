 // Write a function that 
 // receives a single integer number n
 // prints nxn matrix with that number.
 function main(num) {
    let row = "";
    for (let i = 1; i <= num; i++) {
        row = row + `${num} `;
    }
    for (let j = 1; j <= num; j++) {
        console.log(row);
    }
}
main(3);