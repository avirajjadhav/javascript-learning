const clock=document.getElementById('clock');
const today=document.getElementById("date");

setInterval(function () {
    let date = new Date();

    clock.innerHTML = date.toLocaleTimeString();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    today.innerHTML = date.toLocaleDateString("en-IN", options);

}, 1000);


//theme chagne

const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");

themeBtn.addEventListener("click",() => {
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        themeIcon.src="icons/sun.svg";
    }else{
        themeIcon.src="icons/moon.svg";
    }
});