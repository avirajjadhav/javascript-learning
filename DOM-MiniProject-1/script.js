const ColorBoxes = document.querySelectorAll(".color-box");
const body = document.body;
const themeText = document.getElementById("theme-text");

ColorBoxes.forEach(function (cbox) {
    cbox.addEventListener("click", function (e) {

       if (e.target.id === "yellow") {
    body.style.backgroundColor = "yellow";
    themeText.textContent = "Current Background: Yellow 💛";
}
else if (e.target.id === "blue") {
    body.style.backgroundColor = "blue";
    themeText.textContent = "Current Background: Blue 💙";
}
else if (e.target.id === "white") {
    body.style.backgroundColor = "white";
    themeText.textContent = "Current Background: White 🤍";
}
else if (e.target.id === "grey") {
    body.style.backgroundColor = "grey";
    themeText.textContent = "Current Background: Grey 🩶";
}

    });
});