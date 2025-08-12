
const box = document.getElementById("box");


let leftPosition = 0;


const moveBox = setInterval(() => {
  leftPosition += 2; 
  box.style.left = leftPosition + "px"; 


  if (leftPosition >= 600) {
    clearInterval(moveBox);
  }
}, 10);
