function main(num) {
    var digits = num;
    var special = true;
    while (digits > 0) {
        var d = digits % 10;
        digits = Math.floor(digits / 10);

        if ((digits != 0) && (num % digits != 0)) {
            special = false;
            console.log(`${num} is not special`);
            break;

        } else {
            console.log(`${num} is special`);
            break;
        }
    }

}