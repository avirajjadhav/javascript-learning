function myFun() {
  document.getElementById("gfg").innerHTML = Date();
  document.getElementById("gfg").style.background = "cyan";
}
function action(){
 alert("mouse move over");
}
function msoutaction(){
  alert("mouse move out");
}

document.getElementById("inputfield").addEventListener("keypress",keydownAction);
function keydownAction() {
  document.getElementById("inputfield").style.backgroundColor = "orange";
}
function myFunction() {
  alert("You pressed a key inside the input field");
}
 function Displaycar(){
    let x=document.getElementById("cars").value;
    document.getElementById('displayvalue').innerHTML=" selected Car : " + x;

  }
  function myFunction() {
  let text = document.getElementById("myInput").value;
  document.getElementById("demo").innerHTML = "You write: " + text;
}

window.addEventListener("load", function () {
    alert("Page Loaded Successfully!");
});

const form = document.getElementById("myform");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Form Submitted Successfully!");

});

const input = document.getElementById("username");

input.addEventListener("focus", Myfocus); 
function Myfocus() {
  document.getElementById("username").style.backgroundColor = "yellow";
}

document.getElementById("blurevent").addEventListener("blur", myFunction1);

function myFunction1() {
  alert("Input field lost focus.");
}