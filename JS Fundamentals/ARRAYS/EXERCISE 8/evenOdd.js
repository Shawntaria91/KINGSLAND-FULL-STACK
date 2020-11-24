function main(n) {
    let even = n.filter((isEven) => {
        if (isEven % 2 === 0) {
            return isEven;
        }
    });
    let odd = n.filter((isOdd) => {

        if (isOdd % 2 != 0) {
            return isOdd;
        }
    });
    let evenTotal = even.reduce((a, b) => a + b, 0);
    let oddTotal = odd.reduce((a, b) => a + b, 0);
    console.log(evenTotal - oddTotal);
}
main([1, 2, 3, 4, 5, 6]);