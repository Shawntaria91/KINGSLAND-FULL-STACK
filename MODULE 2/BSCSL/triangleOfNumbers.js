function main(n) {

    for (let i = 1; i <= n; i++) {
        let step = "";
            for (let j = i; j <= i; j++) {
                step += j + " ";
                step = step.repeat(i);
            }
            step = step.trim();
            console.log(step);
    } 
}
main(3);