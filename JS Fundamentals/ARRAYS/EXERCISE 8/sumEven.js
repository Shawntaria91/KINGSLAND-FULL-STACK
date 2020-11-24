//array of strings
//parse into numbers
//sum only even numbers

function main(n) {
    let numList = n.map((num) => {
        return Number(num);
    });
    let evenList = numList.filter((evenNum) => {
        if (evenNum % 2 === 0) {
            return evenNum;
        }
    });
    let sum = evenList.reduce((a, b) => a + b, 0);
    console.log(sum);
}
main(["1", "2", "3", "4", "5", "6"]);
