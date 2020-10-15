function main(steps) {
    var i = 0;
    var currentSteps = steps[i];
    var totalSteps = 0;

    while ((currentSteps != "Going home") && (currentSteps != undefined)) {

        if (currentSteps == "Going home") {
            currentSteps = steps[i];
            totalSteps = totalSteps + currentSteps;
            break;
        } else {
        totalSteps += currentSteps;
        i++;
        currentSteps = steps[i];
        }
    } 
    

    if (totalSteps >= 10000) {
        console.log("Goal reached! Good job!");
    } else {
        var stepsNeeded = 10000 - totalSteps;
        console.log(`${stepsNeedeed} more steps to reach goal.`);
    }
}
main([1000, 1500, 2000, 6500]);