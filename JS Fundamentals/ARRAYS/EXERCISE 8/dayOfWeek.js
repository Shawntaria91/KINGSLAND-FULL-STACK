function main(dayOfWeek) {
    let day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (dayOfWeek >= 1 && dayOfWeek <= 7) {
        console.log(day[dayOfWeek - 1]);
    } else {
        console.log("Invalid day!");
    }
}
main(3); //Wednesday