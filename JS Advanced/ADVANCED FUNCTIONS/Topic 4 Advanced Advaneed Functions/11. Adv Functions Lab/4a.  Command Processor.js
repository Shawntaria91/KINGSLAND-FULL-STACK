function main() {
    let str = '';
    return {
    append: (s) => str += s,
    removeStart: (n) => str = str.substring(n),
    removeEnd: (n) => str = str.substring(0, str.length - n),
    print: () => console.log(str)
    };
}

let firstZeroTest = main();
firstZeroTest.append('hello'); 
firstZeroTest.append('again'); 
firstZeroTest.removeStart(3); 
firstZeroTest.removeEnd(4);
firstZeroTest.print();
// loa

let secondZeroTest = main();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
// // 34
