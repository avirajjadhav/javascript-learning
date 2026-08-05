const start = document.getElementById("start");
const stop = document.getElementById("stop");

let intervalId = null;

const letters = "0123456789ABCDEF";

function changeColor() {
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    document.body.style.backgroundColor = color;
}

function startChangingColor() {
    if (intervalId) return;

    intervalId = setInterval(changeColor, 1000);
}

function stopChangingColor() {
    clearInterval(intervalId);
    intervalId = null;
}

start.addEventListener("click", startChangingColor);
stop.addEventListener("click", stopChangingColor);