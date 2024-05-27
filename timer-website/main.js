
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var resetButton = document.getElementById("reset");
var timerDisplay = document.getElementById("h1");


var intervalId;
var seconds = 0;
var minutes = 0;
var hours = 0;


function startTimer() {
    intervalId = setInterval(updateTimer, 1000); 
    startButton.disabled = true; 
}


function stopTimer() {
    clearInterval(intervalId); 
    startButton.disabled = false; 
}


function resetTimer() {
    stopTimer(); 
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay(); 
}


function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    updateDisplay(); 
}


function updateDisplay() {
    var formattedTime = padNumber(hours) + " : " + padNumber(minutes) + " : " + padNumber(seconds);
    timerDisplay.textContent = formattedTime;
}


function padNumber(number) {
    return (number < 10) ? "0" + number : number;
}
