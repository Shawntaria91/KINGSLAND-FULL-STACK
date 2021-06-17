// 1. Time Converter
// Create a program that converts different time units. Your task is to add a click event listener to all
// [CONVERT] buttons. When a button is clicked, read the corresponding input field, convert the value to the
// three other time units and display it in the input fields.
// Example
// One day is equal to 24 hours/1440 minutes/86400 seconds. Whichever button we click, the input fields
// should change depending on the added value on the left. (For example, if we write 48 hours and click
// convert the days, the field value should change to 2).

function attachEventsListeners() {
    document.getElementById('daysBtn').addEventListener('click', onClickDays);
    document.getElementById('hoursBtn').addEventListener('click', onClickHours);
    document.getElementById('minutesBtn').addEventListener('click', onClickMinutes);
    document.getElementById('secondsBtn').addEventListener('click', onClickSeconds);
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    function onClickDays() {
        hours.value = Number(days.value) * 24;
        minutes.value = Number(hours.value) * 60;
        seconds.value = Number(minutes.value) * 60;
    }

    function onClickHours() {
        days.value = (Number(hours.value) / 24);
        minutes.value = Number(hours.value) * 60;
        seconds.value = Number(minutes.value) * 60;
    }

    function onClickMinutes() {
        hours.value = (Number(minutes.value) / 60);
        days.value = (Number(hours.value) / 24);
        seconds.value = Number(minutes.value) * 60;
    }

    function onClickSeconds() {
        minutes.value = (Number(seconds.value) / 60);
        hours.value = (Number(minutes.value) / 60);
        days.value = (Number(hours.value) / 24);
    }
}
//