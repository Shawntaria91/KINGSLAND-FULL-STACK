//Problem2: Currency Converter
var currencyConverter = function(dollars) {
    var euro = 0.00;
    var conversionRate = 0.88;
    euro = dollars * conversionRate;
    return euro;

};
console.log(currencyConverter(17) + " EUR");
console.log(currencyConverter(87) + " EUR");
console.log(currencyConverter(42) + " EUR");