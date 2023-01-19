var convertedHour = 0;
var amPM = "AM";
const reset = 0;
const $ = selector => document.querySelector(selector);

let time = new Date();

let stopwatchTimer = null;
let elapsedMinutes = 0;
let elapsedSeconds = 0;
let elapsedMilliseconds = 0;

document.addEventListener("DOMContentLoaded", () => {
    $("#start").addEventListener("click", startStopwatch);
    $("#stop").addEventListener("click", stopStopwatch);
    $("#reset").addEventListener("click", resetStopWatch);

    setInterval(displayCurrentTime, 1000); 
});

const tickStopWatch = () => {
    elapsedMilliseconds += 1;
    if (elapsedMilliseconds >= 100) {
        elapsedSeconds += 1;
        elapsedMilliseconds = 0;
    }
    if (elapsedSeconds >= 60) {
        elapsedMinutes += 1;
        elapsedSeconds = 0;
    }
    $("#s_minutes").innerHTML = padSingleDigit(elapsedMinutes) + ":";
    $("#s_seconds").innerHTML = padSingleDigit(elapsedSeconds) + ":";
    $("#s_ms").innerHTML = padDoubleDigit(elapsedMilliseconds);
}

const startStopwatch = (event) => {
    event.preventDefault();
    stopwatchTimer = setInterval(tickStopWatch, 10);
}

const stopStopwatch = (event) => {
    event.preventDefault();
    clearInterval(stopwatchTimer);
}

const resetStopWatch = (event) => {
    event.preventDefault();
    elapsedMinutes = 0;
    elapsedSeconds = 0;
    elapsedMilliseconds = 0;
    $("#s_minutes").innerHTML = padSingleDigit(elapsedMinutes) + ":";
    $("#s_seconds").innerHTML = padSingleDigit(elapsedSeconds) + ":";
    $("#s_ms").innerHTML = padDoubleDigit(elapsedMilliseconds);
}

const padSingleDigit = num => num.toString().padStart(2, "0");
const padDoubleDigit = num => num.toString().padStart(3, "0");


const formatHour = hour => {
    if (hour > 12) {
        convertedHour = hour - 12;
        amPM = "PM";
    } else {
        convertedHour = hour;
        amPM = "AM";
    }
    return padSingleDigit(convertedHour);
}





const displayCurrentTime = () => {
    time = new Date();
    const hour = formatHour(time.getHours());
    $("#hours").innerHTML = hour.toString()+":";
    $("#minutes").innerHTML = padSingleDigit(time.getMinutes())+":";
    $("#seconds").innerHTML = padSingleDigit(time.getSeconds());
    $("#ampm").innerHTML = amPM;
}
