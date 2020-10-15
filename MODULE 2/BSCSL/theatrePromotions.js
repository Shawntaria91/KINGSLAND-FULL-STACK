function main(typeOfDay, age) {
    let ticketPrice = 0;

    

    if (age >= 0 && age <= 18) {
        if (typeOfDay == "Weekday") {
          ticketPrice = 12;
        } else if (typeOfDay == "Weekend") {
          ticketPrice = 15;
        } else if (typeOfDay == "Holiday") {
          ticketPrice = 5;
        } 
    }

    if (age > 18 && age <= 64) {
        if (typeOfDay == "Weekday") {
          ticketPrice = 18;
        } else if (typeOfDay == "Weekend") {
          ticketPrice = 20;
        } else if (typeOfDay == "Holiday") {
          ticketPrice = 12;
        } 
    }

    if (age > 64 && age <= 122) {
        if (typeOfDay == "Weekday") {
          ticketPrice = 12;
        } else if (typeOfDay == "Weekend") {
          ticketPrice = 15;
        } else if (typeOfDay == "Holiday") {
          ticketPrice = 10;
        } 
    }
    
    if (age < 0 && age < 122) {
      console.log("Error!");
  } else {
    console.log(ticketPrice+"$");
  }
}
main("Weekday", -12);
