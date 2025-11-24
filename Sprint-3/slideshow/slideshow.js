const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

// Write your code here
let currentIndex = 0;
function moveFrontOnce(forward) {
    console.log("moveFrontOnce called, forward = ", forward);
    if (forward === true) {
        currentIndex = (currentIndex + 1) % images.length; // If forward is true adds 1 to the index
        // and wraps with % images.length in case we are in the last index
    } else {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Same here if backward it deducts one index
        //making sure it wraps back to last image in case we were at index[0]
    }
    const image = document.getElementById("carousel-img");
    image.src = images[currentIndex];
    console.log("Image scr is set to:", image.scr);
}

document.addEventListener("DOMContentLoaded", () => {
    document
        .getElementById("forward-btn")
        .addEventListener("click", () => moveFrontOnce(true));
    document
        .getElementById("backward-btn")
        .addEventListener("click", () => moveFrontOnce(false));
});
