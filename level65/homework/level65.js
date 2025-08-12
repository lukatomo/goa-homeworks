// ==== 2) ვერტიკალური ანიმაცია ====
const box = document.getElementById('animatedBox');
let position = 0;

function moveDown() {
  if (position < window.innerHeight - 100) {
    position += 2;
    box.style.top = position + 'px';
    requestAnimationFrame(moveDown);
  }
}

moveDown();

// ==== 4) Counter ფუნქცია ====
const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
const countDisplay = document.getElementById("count");

let count = 0;

plusBtn.addEventListener("click", function() {
  count++;
  countDisplay.textContent = count;
});

minusBtn.addEventListener("click", function() {
  count--;
  countDisplay.textContent = count;
});
