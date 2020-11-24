function main(num) {
    let output = false;
    if (num === 1) {
        output = false;
    } else if (num === 2) {
        output = true;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                output = false;
                break;
            }
            output = true;
        }
    }
    console.log(output);
}
main(81);