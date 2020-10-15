function main(n) {
    
    let num = 0;
    let sum = 0;
    
    for (i = 1; i <= n; i++) {
        num = i;

        while (num > 0) {
            sum += num % 10;
            num = parseInt(num / 10);
        }
        if (sum.toString().includes("5") || 
           sum.toString().includes("7") ||
           sum.toString().includes("11")) {
               console.log(`${i} -> True`);
           } else {
               console.log(`${i} -> False`);
           }
           sum = 0;
    }

}
main(15);