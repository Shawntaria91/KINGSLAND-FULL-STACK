/*reads hours and minutes from the 24-hour day
calculates what the time will be after 15 minutes. 
result should be printed in the format hh:mm. 
The hours will always be between 0 and 23
minutes will always be between 0 and 59
hours will be written with one or two digits
minutes will be written always with two digits (with a leading zero if necessary).
*/

function main(hours, minutes) {

    var totalMinutes = (hours * 60) + minutes + 15;
    minutes = totalMinutes % 60;
    hours = Math.floor(totalMinutes / 60);

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (hours == 24) {
        hours = 0;
    }
    console.log(hours + ":" + minutes); {
        
    }
}
main(23, 59);