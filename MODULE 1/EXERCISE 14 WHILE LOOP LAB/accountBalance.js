function main(incomeOrExpenses) {
    var balance = 0;
    var money = incomeOrExpenses.shift();

    while ((money !== "End") && (money !== undefined)) {
        var total = Number(money); 
            if (total > 0) {
                console.log(`Increase: ${Math.abs(money).toFixed(2)}`);
                balance += total;
            } else {
                console.log(`Decrease: ${Math.abs(money).toFixed(2)}`);
                balance += total;
            }
        money = incomeOrExpenses.shift();
    }
    console.log(`Balance: ${balance.toFixed(2)}`);
}
main([500, 15.5, -80.35, "End"]);