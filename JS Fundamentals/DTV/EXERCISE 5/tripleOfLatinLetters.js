function main(n) {

    let triple = "";

    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            for (k = 0; k < n; k++) {
                triple = String.fromCharCode(97 + i) + String.fromCharCode(97 + j) + String.fromCharCode(97 + k);
                console.log(triple);
            }
        }
    }
}
main(3);