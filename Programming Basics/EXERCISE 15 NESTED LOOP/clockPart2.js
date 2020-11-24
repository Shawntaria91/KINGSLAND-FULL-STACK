function main(hours, minutes, seconds) {
    let currentHour = hours;
    let currentMinute = minutes;
    let currentSecond = seconds;
    while (currentHour <= 23) {
        if (currentHour < 10) {
            currentHour = "0"+currentHour; 
        }
        while (currentMinute <= 59) {
            if (currentMinute < 10) {
                currentMinute = "0"+currentMinute;
            }
            while (currentSecond <= 59) {
                if (currentSecond < 10) {
                    currentSecond = "0"+currentSecond;   
                }
                console.log(`${currentHour}:${currentMinute}:${currentSecond}`);
                currentSecond++;
            }
            if (currentSecond > 59) {
                currentSecond = 0;
            }
            currentMinute++;
        }
        if (currentMinute > 59) {
            currentMinute = 0;
        }
        currentHour++;
        
        
    }

}
main(21, 59, 58);