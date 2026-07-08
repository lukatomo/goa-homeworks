const btn = document.getElementById("powerBtn");

btn.addEventListener("click", () => {

    btn.innerText = "DOMAIN EXPANSION ⚡";

    document.body.style.background = "linear-gradient(135deg,#050816,#1b003d,#000)";

    const audio = new Audio(
        "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3"
    );

    audio.play();

    createEnergy();
});

function createEnergy(){

    for(let i = 0; i < 50; i++){

        let energy = document.createElement("span");

        energy.classList.add("energy");

        document.body.appendChild(energy);

        energy.style.left = Math.random() * window.innerWidth + "px";

        energy.style.top = Math.random() * window.innerHeight + "px";

        energy.style.animationDuration = Math.random() * 2 + 1 + "s";

        setTimeout(() => {
            energy.remove();
        },3000);
    }
}

const style = document.createElement("style");

style.innerHTML = `
.energy{
    position:fixed;
    width:10px;
    height:10px;
    background:#7b2cff;
    border-radius:50%;
    box-shadow:0 0 20px #7b2cff;
    animation:float linear forwards;
    z-index:9999;
}

@keyframes float{

    from{
        transform:translateY(0) scale(1);
        opacity:1;
    }

    to{
        transform:translateY(-300px) scale(0);
        opacity:0;
    }
}
`;

document.head.appendChild(style);