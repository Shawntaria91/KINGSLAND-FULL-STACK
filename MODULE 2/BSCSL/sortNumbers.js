function main(num1, num2, num3) {
    let max = -Infinity;
    let min = Infinity;
    let middle = "";

    if (num1 > num2 && num1 > num3) {
        max = num1; {
            if (num2 > num3) {
                middle = num2;
                min = num3;
            } else {
                middle = num3;
                min = num2;
            }
        }
    } else if (num2 > num1 && num2 > num3) {
        max = num2; {
            if (num1 > num3) {
                middle = num1;
                min = num3;
            } else {
                middle = num3;
                min = num1;
            }
            
        }
    } else if (num3 > num1 && num3 > num2) {
        max = num3; {
            if (num1 > num2) {
                middle = num1;
                min = num2;
            } else {
                middle = num2;
                min = num1;
            }
        }
    }
    console.log(max);
    console.log(middle);
    console.log(min);
}
main(2, 1, 3);