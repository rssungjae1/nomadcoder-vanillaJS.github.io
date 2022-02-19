const body = document.querySelector("body");
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = new Image();
console.log(chosenImage);
image.src = `images/${chosenImage}`;
image.classList.add("bgImage");
console.log(image);
body.appendChild(image);
// const bgImage = document.createElement();

// bgImage.src = `images/${chosenImage}`;
