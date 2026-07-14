//Global Scope
let language = "JavaScript";

function learn() {
  console.log(language);
}

learn();
console.log(language);


let country = "India";

function showCountry() {
  console.log("Inside:", country);
}

showCountry();

console.log("Outside:", country);



//function Scope

function greet() {
  let message = "Hello";
  console.log(message);
}

greet();
// console.log(message);


function calculate() {
  let total = 500;
  console.log(total);
}

calculate();

console.log(total);


//Block Scope
if (true) {
  let age = 22;
  console.log(age);
}

console.log(age); 

"use strict";


name = "Rahul";

console.log(name);


