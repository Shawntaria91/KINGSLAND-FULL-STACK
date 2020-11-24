function main(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    //If                //then                  //else
    sum % 1 === 0 ? sum += " - Integer" : sum += " - Float";
    console.log(sum);
}
main(9, 100, 1.1);