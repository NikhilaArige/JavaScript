const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// Variables for time values
let seconds = 0, minutes = 0, hours = 0;

// Variables for timer control
let timerInterval = null;
let timerStatus = "stopped";

// Stopwatch function
function stopWatch() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    let leadingSeconds = seconds.toString().padStart(2, "0");
    let leadingMinutes = minutes.toString().padStart(2, "0");
    let leadingHours = hours.toString().padStart(2, "0");

    document.getElementById('timer').innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
}

// Start/Stop button functionality
startStopBtn.addEventListener('click', function () {
    if (timerStatus === "stopped") {
        timerInterval = setInterval(stopWatch, 1000);
        startStopBtn.innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>';
        timerStatus = "started";
    } else {
        clearInterval(timerInterval);
        startStopBtn.innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
        timerStatus = "stopped";
    }
});

// Reset button functionality
resetBtn.addEventListener('click', function () {
    clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerText = "00:00:00";
    startStopBtn.innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
    timerStatus = "stopped";
});
