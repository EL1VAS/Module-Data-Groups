function formatTime(totalSeconds) {
    const minutes = Math.round(totalSeconds / 60);
    const seconds = totalSeconds % 60;
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
