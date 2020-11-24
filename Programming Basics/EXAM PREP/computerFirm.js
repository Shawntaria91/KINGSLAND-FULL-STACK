function main(numOfComputers, salesAndRating) {
    var sales = 0;
    var rating = 0;
    var i = 0;
    var totalSales = 0;
    var totalRating = 0;
    while (salesAndRating[i] !== undefined) {
        rating = salesAndRating[i] % 10;
        sales = Math.floor(salesAndRating[i] / 10); 

        if (rating == 2) {
            sales = sales * 0;
        } else if (rating == 3) {
            sales = sales * 0.5;
        } else if (rating == 4) {
            sales = sales * 0.7;
        } else if (rating == 5) {
            sales = sales * 0.85;
        } else if (rating == 6) {
            sales = sales;
        }
        totalSales += sales;
        totalRating += rating;
        i++;
    }
    avgRating = totalRating / numOfComputers;
    console.log(totalSales.toFixed(2));
    console.log(avgRating.toFixed(2));
}
main(3, [103, 103, 103]);