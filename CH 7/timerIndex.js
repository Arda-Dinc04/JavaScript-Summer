const time = new Date();
var convertedHour = 0;
var amPM = "AM";
const $ = selector => document.querySelector(selector);



const padSingleDigit = num => num.toString().padStart(2, "0");


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


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");
    setInterval(displayCurrentTime(), 1000); 
});


const displayCurrentTime = () => {
    console.log("Display function");
    const hour = formatHour(time.getHours());
    $("#hours").innerHTML = hour.toString()+":";
    $("#minutes").innerHTML = padSingleDigit(time.getMinutes())+":";
    $("#seconds").innerHTML = padSingleDigit(time.getSeconds());
    $("#ampm").innerHTML = amPM;
}
