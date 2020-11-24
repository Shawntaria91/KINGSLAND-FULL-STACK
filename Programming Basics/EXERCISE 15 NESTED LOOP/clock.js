function main(hours, minutes) {
    let currentHour = hours;
    let currentMinute = minutes;
    while (currentHour <= 23) {
        if (currentHour < 10) {
            currentHour = "0"+currentHour; 
        }
        while (currentMinute <= 59) {
            
            if (currentMinute < 10) {
                currentMinute = "0"+currentMinute;
            }
            console.log(`${currentHour} : ${currentMinute}`);
            currentMinute++;
        }
        currentHour++;
        currentMinute = 0;
        
    }

}
main(8, 5);