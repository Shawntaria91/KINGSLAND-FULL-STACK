function main(num) {
    let first = Number(num.shift());
    let last = Number(num.pop());
    let sum = first + last;
    console.log(sum);
}
main("20", "30", "40"); //60