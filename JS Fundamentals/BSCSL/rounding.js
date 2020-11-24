function main (n, dec) {
    if (dec > 15) {
        dec = 15;
    }
    console.log(parseFloat(n.toFixed(dec)));
}
main(10.5, 3);