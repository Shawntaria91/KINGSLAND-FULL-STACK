function main(number) {
    let str = number.toString();
    let nSum = 0;
    let n = 0;
    let num = Number(str % 10);
    number = Math.floor(str / 10);
    for (i = 0; i < str.length; i++) {
        if (num == 0) {
            console.log("ZERO");
        } else {
            nSum = num + 33;
            n = String.fromCharCode(nSum);
            console.log(n.repeat(num));
        }
        num = number % 10;
        number = Math.floor(number / 10);
    }
}
main(2049);
