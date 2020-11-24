function main(num) {
    let currentNum = num;
    let sum = 0;

    while(currentNum) {
        sum += currentNum % 10;
        currentNum = Math.floor(currentNum / 10);
    }
    console.log(sum);
}
main(245678);