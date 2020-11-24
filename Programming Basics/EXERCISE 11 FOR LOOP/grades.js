function main(attendees, grades) {
    var topStudents = 0;
    var fourToNine = 0;
    var threeToNine = 0;
    var fail = 0;
    var sum = 0;
    var avg = 0;

    for (i = 0; i <= attendees; i++) {
        var currentGrade = grades[i]; {
            if (currentGrade >= 5.00) {
                topStudents++;
            } else if ((currentGrade >= 4.00) && (currentGrade <= 4.99)) {
                fourToNine++;
            } else if ((currentGrade >= 3.00) && (currentGrade <= 3.99)) {
                threeToNine++;
            } else if (currentGrade < 3.00) {
                fail++;
            }
        }
    }

    for (i = 1; i <= attendees; i++) {
        sum += grades.shift(); 
    }

            topStudents = (topStudents / attendees) * 100;
            fourToNine = (fourToNine / attendees) * 100;
            threeToNine = (threeToNine / attendees) * 100;
            fail = (fail / attendees) * 100;
            avg = sum / attendees;
            console.log(`Top Students: ${topStudents.toFixed(2)}%`);
            console.log(`Between 4.00 and 4.99: ${fourToNine.toFixed(2)}%`);
            console.log(`Between 3.00 and 3.99: ${threeToNine.toFixed(2)}%`);
            console.log(`Fail: ${fail.toFixed(2)}%`);
            console.log(`Average: ${avg.toFixed(2)}`);
    }
    
    
main(10, [3.00, 2.99, 5.68, 3.01, 4, 4, 6.00, 4.50, 2.44, 5]);