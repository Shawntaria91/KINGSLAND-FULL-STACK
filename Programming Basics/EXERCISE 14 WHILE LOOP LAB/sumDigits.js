function main(n) {
    var sum1 = 0;
    var sum2 = 0;
    var negSum = 0;
    
    while ((n % 10 !== 0) && (n < 0)) {
        var neg = (n % 10);
        negSum += neg;
        n = Math.floor(n / 10) + 1;

    }
    while ((n !== 0) && (n % 10 == 0)) {
        var num1 = 0;
        sum1 += num1;
        n = n / 10;
    }
    while (n % 10 !== 0) {
        var num2 = n % 10;
        sum2 += num2;
        n = Math.floor(n / 10);
    }
    var sum = sum1 + sum2 + negSum;
    console.log(sum);
}
//ain(5634); 
//ain(150);
main(-532);