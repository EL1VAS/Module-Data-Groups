window.images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

// Write your code here
let currentIndex = 0;
let intervalId = null;

// Manual movement of carousel
function moveFrontOnce(forward) {
    const images = window.images;
    console.log("moveFrontOnce called, forward = ", forward); // Trying to troubleshoot
    if (forward === true) {
        currentIndex = (currentIndex + 1) % images.length; // If forward is true adds 1 to the index
        // and wraps with % images.length in case we are in the last index
    } else {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Same here if backward it deducts one index
        //making sure it wraps back to last image in case we were at index[0]
    }
    const image = document.getElementById("carousel-img");
    image.setAttribute("src", images[currentIndex]); // Changed the approach while trying to pass the tests
    console.log("Image src is set to:", image.src); // Tests shows that my img src is undefined
}

// Auto movement of carousel forward
function startAutoForward() {
    stopAuto(); // Function to stop the autoslide before we start
    intervalId = setInterval(() => moveFrontOnce(true), 2000); // Starts the autoslide forward every 2"
    toggleButtons(true); // Auto-forward button active
}

// Auto movement of carousel backwards
function startAutoBackward() {
    stopAuto(); // Stop the autoslide before we start
    intervalId = setInterval(() => moveFrontOnce(false), 2000); // Starts the autoslide backwards
    toggleButtons(true); // Auto-backward button active
}

// Stops automatic slideshow
function stopAuto() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
    toggleButtons(false);
}

// Enables/disables buttons based on if autoslideshow is running
function toggleButtons(isRunning) {
    document.getElementById("auto-forward").disabled = isRunning; // When the auto slideshow is on auto-forward button is unclickable
    document.getElementById("auto-backward").disabled = isRunning; // When auto slideshow is on auto-backward button is unclicable
    document.getElementById("stop").disabled = !isRunning; // Stop button is disabled only when auto slideshow is off, so when autoslideshow is running
    //stop is the only button we can click
}

// Activate (call) the buttons
document.addEventListener("DOMContentLoaded", () => {
    document
        .getElementById("forward-btn")
        .addEventListener("click", () => moveFrontOnce(true));
    document
        .getElementById("backward-btn")
        .addEventListener("click", () => moveFrontOnce(false));
    document
        .getElementById("auto-forward")
        .addEventListener("click", () => startAutoForward());
    document
        .getElementById("auto-backward")
        .addEventListener("click", () => startAutoBackward());
    document.getElementById("stop").addEventListener("click", () => stopAuto());
    // Disable stop button initially when autoslideshow is not running yet
    document.getElementById("stop").disabled = true;
});
