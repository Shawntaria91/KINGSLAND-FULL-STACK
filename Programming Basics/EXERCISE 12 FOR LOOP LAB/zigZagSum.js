function main(n, arrayNum) {
    var sum = 0;

    for (var i = 0; i < n; i++) {
        var number = arrayNum[i];
        if (i % 2 === 0) {
            sum += number;
        } else {
            sum -= number;
        }
    }
    console.log(sum);
}
main(2, [10, -20]);