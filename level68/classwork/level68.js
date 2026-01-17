let para = document.getElementById("myPara");

para.addEventListener("mouseover", function(){
    alert("mouse over has occured");
});














// წამოვიღოთ h2
var title = document.getElementById("title");

// ცვლადი თავიდან 0
var counter = 0;

// onmouseout მოვლენა
title.onmouseout = function() {
  counter = counter + 1; // იგივეა რაც counter++
  console.log(counter);
}
