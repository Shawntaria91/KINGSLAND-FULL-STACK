function main(period, arrayOfPatients) {

    var treated = 0;
    var untreated = 0;
    var doctor = 7;
    for (var i = 1; i <= period; i++) {
        patientsToReview = arrayOfPatients.shift(); {
        
            if ((i % 3 == 0) && (untreated > treated)) {
                doctor++;
                treated += doctor;
                untreated += patientsToReview - doctor;

            } else if (patientsToReview > doctor) {
                treated += doctor;
                untreated += patientsToReview - doctor;

            } else if (patientsToReview <= doctor) {
                treated += patientsToReview;
            }
        }

    }
    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${untreated}.`);
}
main(9, [20, 549, 247, 291, 933, 244, 880, 168, 849]);