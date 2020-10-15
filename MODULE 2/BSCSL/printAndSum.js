function main(start, end) {
    let sum = 0;
    let numbers = "";
    for (i = start; i <= end; i++) {
        if (i == end) {
            numbers += i;
            sum += i;
        } else {
        numbers += i + " ";
        sum += i;
        }
    }
    console.log(numbers);
    console.log(`Sum: ${sum}`);
}
main(5, 10);