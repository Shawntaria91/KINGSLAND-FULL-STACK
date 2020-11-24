function calcFunds(legacy, year) {

    var spend = 0.00;
    
    for (i=1800; i <= year; i++) {
        if (i % 2 == 0) {
            spend += 12000;
        } else {
            spend += 12000 + ((18 + (i - 1800)) * 50);
        }
        
    } 

    if (spend > legacy) {
        var moneyNeeded = spend - legacy;
        console.log(`He will need ${moneyNeeded.toFixed(2)} dollars to survive.`);
    } else {
        var moneyLeft = legacy - spend;
        console.log(`Yes! He will live a carefree life and will have ${moneyLeft.toFixed(2)} dollars left.`);
    }
    
}
calcFunds(50000, 1802);