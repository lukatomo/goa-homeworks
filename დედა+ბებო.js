function showMessage(){

document.getElementById("message").innerHTML =
"❤️ ძალიან მიყვარხართ! მადლობა ყველაფრისთვის. თქვენ ჩემი ცხოვრების ყველაზე დიდი ბედნიერება ხართ. ❤️";

}

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=2+Math.random()*3+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},5000);

}

setInterval(createHeart,250);