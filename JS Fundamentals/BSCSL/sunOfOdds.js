function main(n) {
    let sum = 0;
    let counter = 0;
    for (i = 1; counter < n; i++) {
        if (i % 2 != 0) {
        console.log(i);
        sum += i;
        counter++;
        i++;
        }
    }
    console.log(`Sum: ${sum}`);
}
main(5);