function stopwatch() {
    let timer = null;
    let time = document.getElementById('time');
    let btnStart = document.getElementById('startBtn');
    let btnStop = document.getElementById('stopBtn');
    btnStart.addEventListener('click', startTimer);
    btnStop.addEventListener('click', stopTimer);
    let [seconds, minutes] = [0, 0]; // fake clock counting time 00:00 

    function startTimer() {
        console.log("hello");
        timer = setInterval(myTimer, 1000);
        btnStart.disabled = true; // start is off 
        btnStop.disabled = false;
    }
    function myTimer() {
        if (seconds === 60){
            minutes++
            seconds = 0;
        }
        time.innerText = `${minutes < 10 ? `0` + minutes : minutes} : ${seconds < 10 ? "0" + seconds : seconds}`;
        seconds++; 
    }
    function stopTimer() {
        console.log("Stop timer button clicked");
        clearInterval(timer);
        seconds = 0;
        minutes = 0;
        time.innerText = "00:00";
        btnStart.disabled = false;
        btnStop.disabled = true; 
    }
    console.log("stopwatch");
}