window.images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

// Write your code here
let currentIndex = 0;
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

document.addEventListener("DOMContentLoaded", () => {
    document
        .getElementById("forward-btn")
        .addEventListener("click", () => moveFrontOnce(true));
    document
        .getElementById("backward-btn")
        .addEventListener("click", () => moveFrontOnce(false));
});
