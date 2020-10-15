function main(num, bombers) {
    var bomb = bombers[0];
    var power = bombers[1];
    for (i = 0; i < num.length - 1; i++) { 
        blastRadius = (power * 2) + 1;
        if (num[i] == bomb && i > power) { 
            num.splice(i - power, blastRadius); 
        }
        if (num[i] == bomb && i <= power) { 
            num.splice(0, i);
            num.splice(0, power + 1); 
        }
        if (num[i] == bomb && i == 0) {
            num.splice(0, i); 
            num.splice(0, power + 1); 
        }
    }
    
    console.log(num.reduce((a, b) => a + b, 0));
}
main([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);