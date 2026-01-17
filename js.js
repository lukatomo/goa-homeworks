setInterval(addOne, 1000);

function addOne(){
  let count = document.getElementById("count");
  number = Number(count.textContent);
  number = number + 1;
  count.textContent = number;
}