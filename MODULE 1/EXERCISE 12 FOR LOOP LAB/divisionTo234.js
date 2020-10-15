function main(n, arrayOfNums) {
    var byTwo = 0;
    var byThree = 0;
    var byFour = 0;

    for (var i = 0; i < n; i++) {
        if ((arrayOfNums[i] % 2 === 0)) {
            byTwo++;
        }

        if ((arrayOfNums[i] % 3 === 0)) {
            byThree++;
        }

        if ((arrayOfNums[i] % 4 === 0)) {
            byFour++;
        }
    }
    byTwo = ((byTwo / n) * 100).toFixed(2) + "%";
    byThree = ((byThree / n) * 100).toFixed(2) + "%";
    byFour = ((byFour / n) * 100).toFixed(2) + "%";
    console.log(byTwo);
    console.log(byThree);
    console.log(byFour);
}
main(3, [3, 6, 9]);