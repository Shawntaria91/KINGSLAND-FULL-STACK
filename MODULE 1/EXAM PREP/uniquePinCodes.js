function main(num1,num2,num3){
    
    let a = num1;
    let b = num2;
    let c = num3;
    
    for (let i = 2; i <= a; i++) {
    
        for (let j = 2; j <= b; j++) {

            for (let k = 2; k <= c; k++) {

                if (i % 2 === 0 && k % 2 === 0) {

                    if (j === 2 || j === 3 || j === 5 || j === 7) {
                        console.log(`${i} ${j} ${k}`);
                    }
                }
            }
        }
    }
}
main(3, 5, 5);
    
    
    
    