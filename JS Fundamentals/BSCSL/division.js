function main(num) {

    let output = -Infinity;


    if (num % 10 == 0) {
        output = 10;
    } else if (num % 7 == 0) {
        output = 7;
    } else if (num % 6 == 0) {
        output = 6;
    } else if (num % 3 == 0) {
        output = 3;
    } else if (num % 2 == 0) {
        output = 2;
    } 
    if (output == 10 ||
       output == 7 ||
       output == 6 ||
       output == 3 ||
       output == 2) {
           console.log(`The number is divisible by ${output}`);
       } else {
           console.log("Not divisible");
       }
}
main(30);
main(15);
main(12);
main(1643);