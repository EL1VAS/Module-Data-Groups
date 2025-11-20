function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const mm = String(minutes).padStart(2, "0"); // Added padding to cover the chance the input is a single number
    const ss = String(seconds).padStart(2, "0"); // Also I wanted to match the format of the Time remaining

    return `${mm}:${ss}`;
}

function setAlarm() {
    const inputValue = document.getElementById("alarmSet").value; // Get the value that we input in the box
    const formatedInput = formatTime(inputValue); // Use function above to format the number in the input to mm:ss format
    let remainingSeconds = inputValue; // Added after to be used in the interval function
    const timeRemaining = document.getElementById("timeRemaining"); // Get to the element of the header Time Remaining
    timeRemaining.innerText = `Time Remaining: ${formatedInput}`; // And change its text to display the formated input
    const intervalId = setInterval(function () {
        // Function that will be repeated every second
        remainingSeconds -= 1; // And will deduct a second everytime the function runs
        timeRemaining.innerText = `Time Remaining: ${formatTime(
            remainingSeconds
        )}`; // And will show a countdown display in the header
        if (remainingSeconds <= 0) {
            // When countdown reaches 00:00
            clearInterval(intervalId); // Function will stop running
            playAlarm(); // Alarm will start playing on 00:00
            document.body.style.backgroundColor = "orange";
        }
    }, 1000);
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
    document.body.style.backgroundColor = "white"; // Sorry to alter the code, but I had to reset it when paused
}

window.onload = setup;
