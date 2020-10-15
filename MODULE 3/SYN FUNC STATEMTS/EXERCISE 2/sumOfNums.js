function main(n, m) {

    // Change strings to numbers
    let num1 = Number(n);
    let num2 = Number(m);

    // Declare output variable
    let output = 0;

    //loop from n to m adding to output
    for (let i = num1; i <= num2; i++) {
        output += i;
    }
    console.log(output);
}
main('1', '5');

// Output: 
// 15