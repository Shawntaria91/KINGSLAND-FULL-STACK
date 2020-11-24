function main(num) {

    num = num.toString();
    let sum = 0;

    for(i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }

    let output = sum.toString().includes("9");
    console.log(output ? `${num} Amazing? True` : `${num} Amazing? False`);
}
main(1233);
//main(999);