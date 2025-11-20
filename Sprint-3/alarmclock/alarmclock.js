function formatTime(totalSeconds) {
    const minutes = Math.round(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const mm = String(minutes).padStart(2, "0"); //Added padding to cover the chance the input is a single number
    const ss = String(seconds).padStart(2, "0"); //Also I wanted to match the format of the Time remaining
}

function setAlarm() {
    const inputValue = document.getElementById("alarmSet").value;
    const formatedInput = formatTime(inputValue);
    console.log(formatedInput);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
    document.getElementById("set").addEventListener("click", () => {
        setAlarm();
    });

    document.getElementById("stop").addEventListener("click", () => {
        pauseAlarm();
    });
}

function playAlarm() {
    audio.play();
}

function pauseAlarm() {
    audio.pause();
}

window.onload = setup;
