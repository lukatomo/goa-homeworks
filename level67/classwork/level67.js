const previous = document.getElementById("previous");
const next = document.getElementById("next");
let image = document.getElementById("image");

let index = 0;
const images = ["1.jpg","2.jpg","3.jpg","4.jpg"];

function showImage(currIndex) {
    index = currIndex;
    if (index >= images.length) {
        index = 0;
    }
    if (index < 0) {
        index = images.length - 1;
    }
    image.src = images[index];
}

next.addEventListener("click", function() {
    showImage(index + 1);
});

previous.addEventListener("click", function() {
    showImage(index - 1);
});
