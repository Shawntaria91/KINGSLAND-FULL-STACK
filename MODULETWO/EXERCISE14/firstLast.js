function main(inputArray) {
    let first = Number(inputArray.pop());
    let last = Number(inputArray.shift());
    let sum = first + last;
    console.log(sum);
}
main(['0', '34', '76', '0', '1']);