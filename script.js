// script.js
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;

const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const lapsList = document.getElementById('lapsList');

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', recordLap);

function startTimer() {
    if (!timer) {
        timer = setInterval(updateTime, 10);
    }
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    lapsList.innerHTML = '';
}

function updateTime() {
    milliseconds += 1;
    if (milliseconds == 100) {
        milliseconds = 0;
        seconds += 1;
    }
    if (seconds == 60) {
        seconds = 0;
        minutes += 1;
    }
    updateDisplay();
}

function updateDisplay() {
    minutesDisplay.textContent = pad(minutes);
    secondsDisplay.textContent = pad(seconds);
    millisecondsDisplay.textContent = pad(milliseconds);
}

function pad(unit) {
    return unit < 10 ? '0' + unit : unit;
}

function recordLap() {
    const lapTime = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapsList.appendChild(lapItem);
}
