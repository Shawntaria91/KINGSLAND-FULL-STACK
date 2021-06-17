function main(input) {
    let step = Number(input.pop());
    input.filter((element, index) => index % step == 0).forEach(element => console.log(element));
}
main(
[
    '5',
    '20',
    '31',
    '4',
    '20',
    '2'
]);
// 5
// 31
// 20