function main(arrOfStrings){
    evenIndexByiPlusEqual2(arrOfStrings);
}

function evenIndexByiPlusEqual2(arrOfStrings) {
    let result = [];
    for (let i = 0; i < arrOfStrings.length; i+=2) {
        result.push(arrOfStrings[i]);
    }
    console.log(result.join(" "));
}
main(['20', '30', '40']);
// 20 40

main(['5', '10']);
// 5