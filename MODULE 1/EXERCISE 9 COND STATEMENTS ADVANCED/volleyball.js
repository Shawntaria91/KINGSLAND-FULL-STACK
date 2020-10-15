function main(yearType, numHolidays, numWeekends) {
    var sofiaWeekends = 48 - numWeekends;
    var sofiaHoliGames = numHolidays * (2/3); 
    var sofiaWeekendGames = sofiaWeekends * (3/4);
    var totalGames = sofiaHoliGames + sofiaWeekendGames + numWeekends;
    if (yearType == "leap") {
        totalGames = totalGames + (totalGames * 0.15);
        console.log(Math.floor(totalGames));
    } else {
        console.log(Math.floor(totalGames));
    }
}
main("leap", 5, 2);