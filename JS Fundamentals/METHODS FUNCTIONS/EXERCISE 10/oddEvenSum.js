// receive a single number. 
// write a function that returns the sum of all even and all odd digits
// from that number.

function oddEvenSum(num) {
    let list = num.toString().split("");
    let oddSum = 0;
    let evenSum = 0;
    for (i = 0; i < list.length; i++) {
        let currentNum = Number(list[i]);
        if (currentNum % 2 == 0) {
            evenSum +=currentNum;
        } else {
            oddSum += currentNum;
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}
function main(num) {
    let output = oddEvenSum(num);
    console.log(output.trim());
}
main(1000435);