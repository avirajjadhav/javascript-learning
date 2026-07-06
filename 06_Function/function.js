
function MyFunction(name) {   
  console.log("Hello " + name);
}
MyFunction("aviraj");  

//Default Parameters
function greet(name = "Guest") {
  console.log("welcome, " + name);
}
greet();
// greet("avi");
// console.log(greet("aviraj"));

//Return Statement

function AddTwoNumber(a,b){
    return a+b;
}
// let result=AddTwoNumber(10,5);
// console.log("addition of 2 numbers:",result);
console.log("addition of two numbers:",AddTwoNumber(10,5));

// 2. Anonymous Function
const greeting = function () {
    return ("Hello");
};
console.log(greeting());

// const addition =function(a,b){
//    return a+b;
// }
// console.log(addition(20,30));


//3. Function Expression

const addition =function(a,b){
   return a+b;
}
console.log(addition(20,30));


const divide =function(p,q){
    return p%q;
}
console.log(divide(10,2));
//4. Arrow Function (ES6)

const add =(a,b) => a+b;

console.log(add(100,200));

const mul = (a, b) => {
    return a * b;
};
console.log(mul(100,10));


//5 callback function
function prepareFood(name,callback) {
    console.log("Food is ready for:" + name);
    callback(name);
}

function deliverFood(name) {
    console.log("Food delivered to:" + name);
}

prepareFood("aviraj",deliverFood);

//6 constructor function 

function person(name,age){
    this.name=name;
    this.age=age;
}
const user= new person("aviraj",22);
console.log(user.name);

//7 Async Function

async function fetchData() {
  return "Data fetched!";
}
fetchData().then(console.log);

async function getData() {
    return "Data Received";
}

getData().then(console.log);

//Recursive Function

function countdown(num) {
    if (num === 0) {
        return;
    }

    console.log(num);
    countdown(num - 1);
}
countdown(3);

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

