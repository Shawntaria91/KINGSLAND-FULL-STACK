function main(n) {
    let solutions = 0;
    for (x1 = 0; x1 <= n; x1++) {
        for (x2 = 0; x2 <= n; x2++) {
            for (x3 = 0; x3 <= n; x3++) {
                for (x4 = 0; x4 <= n; x4++) {
                    for (x5 = 0; x5 <= n; x5++) {
                        if (x1 + x2 + x3 + x4 + x5 == n) {
                            solutions++;
                        }
                    }
                }
            }
        }
    }
    console.log(solutions);
}
main(25);
main(10);
main(7);
main(0);
main(1);
main(4);