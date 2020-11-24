function main(input) {
    let step = +(input.pop());
    input.filter((elem, idx) => idx % step == 0).forEach(elem => console.log(elem));
}
main(['5',
    '20',
    '31',
    '4',
    '20',
    '2'
]);