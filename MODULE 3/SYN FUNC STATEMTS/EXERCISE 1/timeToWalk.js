// Write a function that calculates how long it takes a student to get to university.

// The function takes three numbers:

// The first is the number of steps the student takes from their home to the university

// Тhe second number is the length of the student's footprint in meters

// Тhe third number is the student speed in km/h

// Every 500 meters the student rests and takes a 1 minute break.

// Calculate how long the student walks from home to university and print on the console the result in the

// following format: 'hours:minutes:seconds'.

// The input comes as three numbers.

// The output should be printed on the console.



function main(steps, lengthInMeters, speed) {

    timeItTakes(steps, lengthInMeters, speed);
}

function timeItTakes(steps, meters, speed) {
  
    let dist = steps * meters;
    let mps = speed / 3.6;
    let time = dist / mps;
    let rest = Math.floor(dist / 500);
    let hr = Math.floor(time / 3600);
    let min = Math.floor(time / 60);
    let sec = Math.round(time - (min * 60));
    
    min = min + rest;

    if (hr < 10) {

        hr = `0${hr}`;
    } 
    
    if (min < 10) {

        min = `0${min}`;
    }

    if (sec < 10) {

        sec = `0${sec}`;
    }
    console.log(hr +":" + (min) +":" + sec);
}
//main(4000, 0.60, 5);
//main(2564, 0.70, 5.5);
main(2000, 0.20, 4); // 00:06:00