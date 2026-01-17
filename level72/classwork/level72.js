const box = document.getElementById("box")

let leftPos = 0
let topPos = 0

const move = setInterval(() => {
  leftPos += 20
  topPos += 20
  box.style.left = leftPos + "px"
  box.style.top = topPos + "px"

  if (leftPos >= 200 && topPos >= 200) {
    clearInterval(move)
    box.style.width = "150px"
    box.style.height = "150px"
    box.style.background = "red"
  }
}, 1500)
