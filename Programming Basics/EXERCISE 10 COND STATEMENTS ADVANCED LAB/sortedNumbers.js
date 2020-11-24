function main(num1, num2, num3) {
    if (num1 < num2 && num2 < num3) {
        console.log("Ascending");
    }else if (num1 > num2 && num2 > num3) {
        console.log("Descending");
    }else {
        console.log("Not sorted");
    }
}
main(3,2, 1);