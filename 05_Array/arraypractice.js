//accessing elements of an array.

// let fruits=["apple","banana","mango","orange","Grapes"];

// //que 1.

// console.log(fruits[1]);

// //que 2.

// console.log(fruits[3]);

// //que 3

// let fruit=(fruits[2]);

// console.log("accessing mango using fruit variable :",fruit)

// //que 4

// let a=(fruits[0]);
// let b=(fruits[1]);
// let c=(fruits[2]);

// for (let i = 1; i <= 3; i++) {
//     console.log( fruits[i]);
// }

// console.log("accessing array individually:",a,b,c);

// let Grapes=fruits[fruits.length-1];
// console.log("accessing the last element:"+ Grapes)


// 2accessing the first element of an array 

let colors=["red","Blue","Green","yellow"];

//que 1.
// let fst=colors[0];

// console.log("accesing first element of array:",fst);

// let firstColor=(colors[0]);

// console.log("store the firt color in variable firstcolor:",firstColor);

//que 3.
// colors[0]="black";

// console.log("replace 1st color with black:",colors);

// let colors = ["Red", "Blue", "Green"];
let fruits = ["Apple", "Banana", "Mango"];
let numbers = [10, 20, 30];

function getFirstElement(arr) {
    return arr[0];
}

// console.log(getFirstElement(colors));   // Red
// console.log(getFirstElement(fruits));   // Apple
// console.log(getFirstElement(numbers));  // 10

// let a=["HTML", "CSS", "JS"];

// let felement=a[0];

// console.log(felement);

// //accessing the last element of an array.

// let cities = ["Mumbai", "Delhi", "Pune", "Chennai"];
// let char =["A", "B", "C", "D", "E"];

// let lst=cities[cities.length-1];

// // console.log(lst);

// let lastcity=cities[cities.length-1];

// // console.log(lastcity);

// function LastElement(arr) {
    
//    return arr[arr.length-1]
    
// }
// // console.log(LastElement(cities));
// // console.log(LastElement(char));

// //modifying array elements

// let numbers=[10,20,30,40,50];
// console.log(numbers);

// numbers[1]=25;

// // console.log("updated array:",numbers);

// numbers[numbers.length-1]=100;

// console.log("after change 50 to 100 :",numbers);

// numbers[2]="Thirty";

// console.log("after thirty :",numbers);

// numbers[2]=60;

// console.log("after the double:",numbers);


let a = ["HTML", "CSS", "JS"];

// Check type of array
console.log(typeof a);

//array length

let animals = ["Dog", "Cat", "Lion", "Tiger"];

console.log("original array:",animals);

if (animals.length >3) {
    console.log("array has more than 3 elements")
}else{
    console.log("array has less than 3 elements")
}

let len=animals.length;

console.log("array length:",len);

let lastIndex=animals.length-1;
console.log("last index of array:",lastIndex);


let lastElement=animals[animals.length-1];
console.log("array last element:",lastElement);

if(animals.length===0){
    console.log("array is empty")
}else{
    console.log("array is not empty");
}

let arr=[1,2,3,4];

arr.Length=7;

console.log("after increasing the array length:",arr);